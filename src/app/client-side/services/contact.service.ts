import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResContactAppointment } from 'src/app/interfaces/res-contact-appointment';
import { ResContactUs } from 'src/app/interfaces/res-contact-us';
import { PathService } from 'src/app/services/path.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient,private servPath:PathService) { }


    sendContactAppointmentEmail(contactAppointmentData:ResContactAppointment){
      return this.http.post(this.servPath.getContactAppointmentPath(),contactAppointmentData);
    }

    sendContactUsEmail(contactUsData:ResContactUs){
      return this.http.post(this.servPath.getContactUsPath(),contactUsData);
    }
}
