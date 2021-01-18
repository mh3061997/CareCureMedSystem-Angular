import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServUtilitiesService {

  specialities: string[] = ['Surgery', 'Plastic Surgery', 'Dermatology', 'Nutrition', 'Internal Medicine',
    'Obstetrics', 'Dentistry'];
  constructor() { }

  public formatDateTime(dateString: string):string {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString('en-US', {weekday:'long',day:'2-digit',month:'long',year:'numeric',hour12:true,hour:"2-digit",minute:"2-digit",timeZone:"Africa/Cairo" });
  }

  public formatDate(dateString:string):string {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString('en-US', {weekday:'long',day:'2-digit',month:'long',year:'numeric',timeZone:"Africa/Cairo"})

  }
}
