import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { ResContactUs } from 'src/app/interfaces/res-contact-us';
import { ContactService } from '../../services/contact.service';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  faTiktok=faTiktok;
  isContactFormSubmitted=false;

  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;
  constructor(private servContact: ContactService) { }

  ngOnInit(): void {
    const myLatLng: google.maps.LatLngLiteral = { lat: 30.064309, lng: 31.325790 };
    const mapProperties = {
      center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: "Care & Cure Clinics",
    });
  }


  sendContactUsEmail(contactUsFormValue: any) {

    if (contactUsFormValue.name &&
      contactUsFormValue.mobile &&
      contactUsFormValue.email &&
      contactUsFormValue.message) {
      let contactUsDataDTO: ResContactUs = {
        name: contactUsFormValue.name,
        mobile: contactUsFormValue.mobile,
        email: contactUsFormValue.email,
        message: contactUsFormValue.message

      }
    //console.log(contactUsDataDTO);
    
      this.servContact.sendContactUsEmail(contactUsDataDTO).subscribe(()=>{
        this.isContactFormSubmitted=true;
      });
    }

  }
}
