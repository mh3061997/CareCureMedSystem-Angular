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
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medical-ops',
  templateUrl: './medical-ops.component.html',
  styleUrls: ['./medical-ops.component.css']
})
export class MedicalOpsComponent implements OnInit {

  faPencilAlt=faPencilAlt;

  appointment: ResAppointment;
  appointmentId: number;
  services: ResServicePriceList[];
  invoice: ResInvoice;
  invoiceId: number;
  selectedServices: ResInvoiceItem[] = [];
  
  serviceQuantityMap = new Map();
  
  @ViewChild('noteAppointment', { static: false }) newNoteAppointment: ElementRef;

  
  constructor(private servAppointment: ServAppointmentService,
    private servInvoice: ServInvoiceService,
    private servInvoiceItem: ServInvoiceItemService,
    private servServicePriceList: ServServicePriceListService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private servNoteAppointment:ServNoteAppointmentService) {

    this.getAppointmentCode();
    
    servAppointment.getAppointmentByID(this.appointmentId).subscribe(appointment => {
      this.appointment = appointment;
   
      switch (this.appointment.speciality) {
        case "Dentistry":
          servServicePriceList.getServicePriceListBySpeciality("Dentistry").subscribe(services => {
            this.services = services;
            this.services.forEach(service=>{
              this.serviceQuantityMap.set(service,0);
            })
            console.log(this.services);
          });
          break;
        case "Dermatology": servServicePriceList.getServicePriceListBySpeciality("Dermatology").subscribe(services => {
          this.services = services;
          this.services.forEach(service=>{
            this.serviceQuantityMap.set(service,0);
          });
          console.log(this.services);
        });
          break;
        default: if (this.appointment.type == "Visit") {
          this.selectedServices.push({ code: 0, name: "Visit", price: this.appointment.doctor.priceVisit });
        } else {

          this.selectedServices.push({ code: 0, name: "Revisit", price: this.appointment.doctor.priceRevisit });
        }
          this.CreateInvoice();
          console.log(this.selectedServices);

      }
    });
  }
 addServiceQuantity(service: ResServicePriceList) {
    const serviceInvoiceItem:ResInvoiceItem={
      code:0,
      name:service.name,
      price:service.price,
      invoice:this.invoice
    }

    this.selectedServices.push(serviceInvoiceItem); //speciality is ignored when sending resinvoiceitem json
    this.serviceQuantityMap.set(service,this.serviceQuantityMap.get(service)+1);
  }

  removeServiceQuantity(service:ResServicePriceList){

    const serviceInvoiceItem:ResInvoiceItem={
      code:0,
      name:service.name,
      price:service.price,
      invoice:this.invoice
    }
      const index = this.selectedServices.indexOf(serviceInvoiceItem);
      this.selectedServices.splice(index,1); //remove 1 element starting from index
      this.serviceQuantityMap.set(service,this.serviceQuantityMap.get(service)-1);

  }
  
  

 

   CreateInvoice() {

    if(!this.selectedServices.length){
      if (this.appointment.type == "Visit") {
        this.selectedServices.push({ code: 0, name: "Visit", price: this.appointment.doctor.priceVisit });
      } else {

        this.selectedServices.push({ code: 0, name: "Revisit", price: this.appointment.doctor.priceRevisit });
      }
    }
    let totalprice=0;
    this.selectedServices.forEach(service=>{
      totalprice+=service.price;
    })
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
      this.CreateNoteAppointment();
      this.invoice = invoiceWithCode;
      this.invoiceId = invoiceWithCode.code;
      this.CreateInvoiceItems();
    });

  }
  
  private CreateNoteAppointment(){
    const newNoteAppointmentObj:ResNoteAppointment = {
      code:0,
      note:this.newNoteAppointment.nativeElement.value,
      appointment:this.appointment
    };
    this.servNoteAppointment.addNoteAppointment(newNoteAppointmentObj).subscribe(res=>{});

  }
  private updateAppointmentStatus() {
    this.appointment.status = "Doctor Done";
    this.servAppointment.updateAppointment(this.appointment).subscribe(res => {
    
    });
  }
  private CreateInvoiceItems() {
    this.selectedServices.map(service=>{service.invoice=this.invoice});
    this.servInvoiceItem.addInvoiceItemMulti(this.selectedServices).subscribe(res => {
      this.goToDoctor();
    });
  }

  private goToDoctor() {
    
    this.router.navigate(['doctor', this.appointment.doctor.code.toString()]);
  }

  private getAppointmentCode() {
    this.appointmentId = this.currentRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
  }

}
