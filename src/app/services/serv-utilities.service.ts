import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServUtilitiesService {
  
  specialities:string[]=['Surgery','Plastic Surgery','Dermatology','Nutrition','Internal Medicine',
'Obstetrics','Dentistry'];
  constructor() { }
}
