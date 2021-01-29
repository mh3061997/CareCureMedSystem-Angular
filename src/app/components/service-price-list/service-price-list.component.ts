import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResServicePriceList } from 'src/app/interfaces/res-service-price-list';
import { ServServicePriceListService } from 'src/app/services/serv-service-price-list.service';
import { ServiceAddDialogComponent } from './service-add-dialog/service-add-dialog.component';

@Component({
  selector: 'app-service-price-list',
  templateUrl: './service-price-list.component.html',
  styleUrls: ['./service-price-list.component.css']
})
export class ServicePriceListComponent implements OnInit {


  servicePriceListDermatology: ResServicePriceList[];
  servicePriceListDentistry: ResServicePriceList[];

  constructor(private servServicePriceList: ServServicePriceListService,
    private dialogAddService: MatDialog) {
    servServicePriceList.getServicePriceListBySpeciality("Dermatology").subscribe(
      services => {
        this.servicePriceListDermatology = services;
      }
    )
    servServicePriceList.getServicePriceListBySpeciality("Dentistry").subscribe(
      services => {
        this.servicePriceListDentistry = services;
      }
    )
  }

  updatePrice(updatedService: ResServicePriceList) {
    this.servServicePriceList.updateServicePriceList(updatedService).subscribe(
      res => { }
    );
  }

  ngOnInit(): void {
  }


  openNewServiceDialog() {
    const dialogRef = this.dialogAddService.open(ServiceAddDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe((closed) => {

      if (closed) {

        this.servServicePriceList.getServicePriceListBySpeciality("Dermatology").subscribe(
          services => {
            this.servicePriceListDermatology = services;
          }
        );
        this.servServicePriceList.getServicePriceListBySpeciality("Dentistry").subscribe(
          services => {
            this.servicePriceListDentistry = services;
          }
        );

      }


    });


  }

}
