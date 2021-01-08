import { Component, OnInit } from '@angular/core';
import { ResServicePriceList } from 'src/app/interfaces/res-service-price-list';
import { ServServicePriceListService } from 'src/app/services/serv-service-price-list.service';

@Component({
  selector: 'app-service-price-list',
  templateUrl: './service-price-list.component.html',
  styleUrls: ['./service-price-list.component.css']
})
export class ServicePriceListComponent implements OnInit {

  
  servicePriceListDermatology:ResServicePriceList[];
  servicePriceListDentistry:ResServicePriceList[];

  constructor(private servServicePriceList:ServServicePriceListService) { 
    servServicePriceList.getServicePriceListBySpeciality("Dermatology").subscribe(
      services => {
        this.servicePriceListDermatology = services;
      }
    )
    servServicePriceList.getServicePriceListBySpeciality("Dentistry").subscribe(
      services => {
        this.servicePriceListDentistry= services;
      }
    )
  }

  updatePrice(updatedService:ResServicePriceList){
    this.servServicePriceList.updateServicePriceList(updatedService).subscribe(
      res=>{}
    );
  }

  ngOnInit(): void {
  }

}
