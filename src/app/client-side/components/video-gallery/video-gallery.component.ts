import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

  

  DermatolgyArr:string[]=['https://www.youtube.com/embed/TdrL3QxjyVw','https://www.youtube.com/embed/TdrL3QxjyVw','https://www.youtube.com/embed/TdrL3QxjyVw'];
  DentalArr:string[]=['https://www.youtube.com/embed/TdrL3QxjyVw'];
  InternalMedcineArr:string[]=['https://www.youtube.com/embed/TdrL3QxjyVw'];
  ObsArr:string[]=['https://www.youtube.com/embed/TdrL3QxjyVw'];
  NutritionArr:string[]=['https://www.youtube.com/embed/TdrL3QxjyVw'];
  SurgeryArr:string[]=['https://www.youtube.com/embed/TdrL3QxjyVw'];
  PlasticSurgeyArr:string[]=['https://www.youtube.com/embed/TdrL3QxjyVw'];

  activeArr:string[] = this.DermatolgyArr;
  activeSpeciality:string="Dermatology";


  changeActiveArr(speciality: string){
    switch(speciality) {
      case 'dermatology': this.activeArr = this.DermatolgyArr;
      this.activeSpeciality="Dermatology";

    break;
    case 'dental': this.activeArr = this.DentalArr;
          this.activeSpeciality="Dentistry";

    break;

    case 'internal': this.activeArr = this.InternalMedcineArr;
          this.activeSpeciality="Internal Medicine";

    break;

    case 'obs': this.activeArr = this.ObsArr;
          this.activeSpeciality="Obsetrics";

    break;

    case 'nutrition': this.activeArr = this.NutritionArr;
          this.activeSpeciality="Nutrition";

    break;

    case 'surgery': this.activeArr = this.SurgeryArr;
          this.activeSpeciality="Surgery";

    break;

    case 'plastic': this.activeArr = this.PlasticSurgeyArr;
          this.activeSpeciality="Plastic Surgery";

    break;
  }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

