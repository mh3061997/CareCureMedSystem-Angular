import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit(): void {
    const myLatLng: google.maps.LatLngLiteral = {lat: 30.063812, lng: 31.325563};
    const mapProperties = {
         center: myLatLng,
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);

    new google.maps.Marker({
      position: myLatLng,
      map:this.map,
      title: "Care & Cure Clinics",
    });
 }

}
