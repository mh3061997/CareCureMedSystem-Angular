import { Component, OnInit } from '@angular/core';

declare var Splide:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener( 'DOMContentLoaded', function () {
      new Splide( '.splide' ).mount();
      var secondarySlider = new Splide( '#secondary-slider', {
        fixedWidth  : 100,
        height      : 60,
        gap         : 10,
        cover       : true,
        isNavigation: true,
        focus       : 'center',
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
        arrows     : false,
        cover      : true,
      } ); // do not call mount() here.
      
      primarySlider.sync( secondarySlider ).mount();
    } );

  }


}
