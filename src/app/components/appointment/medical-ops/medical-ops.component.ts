import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ResInvoiceItem } from 'src/app/interfaces/res-invoice-item';
import { ResServicePriceList } from 'src/app/interfaces/res-service-price-list';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServInvoiceItemService } from 'src/app/services/serv-invoice-item.service';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import { ServServicePriceListService } from 'src/app/services/serv-service-price-list.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ServNoteAppointmentService } from 'src/app/services/serv-note-appointment.service';
import { ResNoteAppointment } from 'src/app/interfaces/res-note-appointment';
import { Form, FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomItemDialogComponent } from '../../invoice/invoice/add-custom-item-dialog/add-custom-item-dialog.component';
import { AddCustomItemMedopsDialogComponent } from './add-custom-item-medops-dialog/add-custom-item-medops-dialog.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServiceSearchPipe } from 'src/app/pipes/service-search.pipe';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServMembershipService } from 'src/app/services/serv-membership.service';
@Component({
  selector: 'app-medical-ops',
  templateUrl: './medical-ops.component.html',
  styleUrls: ['./medical-ops.component.css']
})
export class MedicalOpsComponent implements OnInit {

  faPencilAlt = faPencilAlt;

  appointment: ResAppointment;
  appointmentId: number;
  services: ResServicePriceList[];
  invoice: ResInvoice;
  invoiceId: number;
  selectedServices: ResInvoiceItem[] = [];
  customItems: ResInvoiceItem[] = [];
  serviceQuantityMap = new Map();
  serviceContinuationMap = new Map();
  searchText: string = '';
  labelPosition: 'before' | 'after' = 'before';
  membershipChosen: ResMembership;
  chosenMembershipUsedUnits: number;

  @ViewChild('historyForm', { static: false }) historyForm: NgForm;



  constructor(private servAppointment: ServAppointmentService,
    private servInvoice: ServInvoiceService,
    private servInvoiceItem: ServInvoiceItemService,
    private servServicePriceList: ServServicePriceListService,
    public dialogAddCustomInvoiceItem: MatDialog,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private servNoteAppointment: ServNoteAppointmentService,
    private servMembership: ServMembershipService) {

    this.getAppointmentCode();

    servAppointment.getAppointmentByID(this.appointmentId).subscribe(appointment => {
      this.appointment = appointment;
      console.log(appointment);

      switch (this.appointment.speciality) {
        case "Dentistry":
          servServicePriceList.getServicePriceListBySpeciality("Dentistry").subscribe(services => {
            this.services = services;
            this.services.forEach(service => {
              this.serviceQuantityMap.set(service, 0);
              this.serviceContinuationMap.set(service, false);
            });
            // console.log(this.services);
          });
          break;
        case "Dermatology": servServicePriceList.getServicePriceListBySpeciality("Dermatology").subscribe(services => {
          this.services = services;
          this.services.forEach(service => {
            this.serviceQuantityMap.set(service, 0);
            this.serviceContinuationMap.set(service, false);

          });
          // console.log(this.services);
        });
          break;


      }
    });
  }
  addServiceQuantity(service: ResServicePriceList) {
    const serviceInvoiceItem: ResInvoiceItem = {
      code: 0,
      name: service.name,
      price: service.price,
      invoice: this.invoice
    }

    this.selectedServices.push(serviceInvoiceItem); //speciality is ignored when sending resinvoiceitem json
    this.serviceQuantityMap.set(service, this.serviceQuantityMap.get(service) + 1);
  }

  removeServiceQuantity(service: ResServicePriceList) {

    const serviceInvoiceItem: ResInvoiceItem = {
      code: 0,
      name: service.name,
      price: service.price,
      invoice: this.invoice
    }
    const index = this.selectedServices.indexOf(serviceInvoiceItem);
    this.selectedServices.splice(index, 1); //remove 1 element starting from index
    this.serviceQuantityMap.set(service, this.serviceQuantityMap.get(service) - 1);

  }

  onCheckChanged(service: ResServicePriceList, checked: boolean) {
    // console.log(service,checked);
    this.serviceContinuationMap.set(service.name + service.price.toString(), checked);

  }



  CreateInvoice() {
    console.log(this.historyForm);
  console.log(this.appointment);
  
    if (!this.selectedServices.length) {
      if (this.appointment.type == "Visit") {
        this.selectedServices.push({ code: 0, name: "Visit", price: this.appointment.doctor.priceVisit });
      } else {

        this.selectedServices.push({ code: 0, name: "Revisit", price: this.appointment.doctor.priceRevisit });
      }
    }
    if (this.chosenMembershipUsedUnits && this.membershipChosen) {
      this.selectedServices.push({ code: 0, name: "Package " + this.membershipChosen.packageBase.name + ", used units: " + this.chosenMembershipUsedUnits, price: 0 });

    }
    let totalprice = 0;
    this.formatSelectedServicesContinuation()
    this.selectedServices.forEach(service => {
      totalprice += service.price;
    });
    this.customItems.forEach(service => {
      totalprice += service.price;
    });
    const newInvoice: ResInvoice = {
      code: 0,
      appointment: this.appointment,
      dateCreated: new Date().toISOString(),
      dateFinalized: new Date().toISOString(),
      discount: 0,
      invoiceItems: [],
      paymentMethod: "",
      status: "Not Paid",
      totalAfterDiscount: totalprice,
      totalDue: totalprice,
      totalPaid: 0,
      totalRemaining: totalprice
    };

    this.servInvoice.addInvoice(newInvoice).subscribe(invoiceWithCode => {
      this.updateAppointmentStatus(); //doctor done
      this.invoice = invoiceWithCode;
      this.invoiceId = invoiceWithCode.code;
      this.formatSelectedServicesInvoice();
      this.CreateInvoiceItems();
    });

  }

  private updateAppointmentStatus() {
    this.appointment.status = "Doctor Done";
    this.servAppointment.updateAppointment(this.appointment).subscribe(res => {

    });
  }

  private updateMembershipDeductUnits(unitsUsed: number, membership: ResMembership) {
    membership.remainingAmount -= unitsUsed;
    let tempPatient = this.appointment.patient;
    tempPatient.memberships = [];
    membership.patient = tempPatient;
    this.servMembership.updateMembership(membership).subscribe(() => {
      this.goToDoctor();
    });
  }
  private formatSelectedServicesContinuation() {
    this.selectedServices.map(service => {

      if (this.serviceContinuationMap.get(service.name + service.price.toString())) {
        service.name += " Continuation"
        service.price = 0
      }


    });
  }
  private formatSelectedServicesInvoice() {
    this.selectedServices.map(service => {


      service.invoice = this.invoice;

    });
    this.customItems.map(service => {
      service.invoice = this.invoice;
    });
  }
  private CreateInvoiceItems() {

    console.log(this.selectedServices.concat(this.customItems));
    this.servInvoiceItem.addInvoiceItemMulti(this.selectedServices.concat(this.customItems)).subscribe(res => {

      if (this.chosenMembershipUsedUnits && this.membershipChosen) {
        this.updateMembershipDeductUnits(this.chosenMembershipUsedUnits, this.membershipChosen);
      }
      else { this.goToDoctor(); }
    });
  }

  private goToDoctor() {

    this.router.navigate(['admin', 'doctor', this.appointment.doctor.code.toString()]);
  }

  private getAppointmentCode() {
    this.appointmentId = this.currentRoute.snapshot.params['id'];
  }

  openAddCustomInvoiceItemDialog() {

    const dialogRef = this.dialogAddCustomInvoiceItem.open(AddCustomItemMedopsDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(CustomItem => {
      if (CustomItem) {
        // console.log("closed", CustomItem);
        this.customItems.push(CustomItem);
        //  console.log(this.selectedServices);
      }
    });
  }



  ngOnInit(): void {

  }

}
