import { Pipe, PipeTransform } from '@angular/core';
import { ResServicePriceList } from '../interfaces/res-service-price-list';

@Pipe({
  name: 'serviceSearch'
})
export class ServiceSearchPipe implements PipeTransform {

  transform(services: ResServicePriceList[], searchText: string): ResServicePriceList[] {

    if (!services) {
      return [];
    }
    if (!searchText) {
      return services;
    }
    searchText = searchText.toLocaleLowerCase();

    return services.filter(service => {
      return service.name.toLocaleLowerCase().includes(searchText);
    });
  }

}

  

