import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
declare var Splide:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  constructor(){}

  ngOnInit(){
  
      this.initSplide();
 
  }

  initSplide():void {
    document.addEventListener( 'DOMContentLoaded', function () {
   
      var secondarySlider = new Splide( '#secondary-slider', {
        fixedWidth  : 100,
        height      : 60,
        gap         : 10,
        cover       : true,
        isNavigation: true,
        focus       : 'center',
        rewind: true,
        arrows:false,
        pagination:false,
        breakpoints : {
          '600': {
            fixedWidth: 66,
            height    : 40,
          }
        },
      } ).mount();
      
      var primarySlider = new Splide( '#primary-slider', {
        type       : 'fade',
        heightRatio: 0.5,
        pagination : false,
        arrows     : true,
        cover      : true,
        height:'90vh',
        rewind:true
      } ); // do not call mount() here.
      
      primarySlider.sync( secondarySlider ).mount();
    } );

  }

}
