import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    autoplay:true,
    loop: true,
    dots: true,
    navSpeed: 100,
    dotsEach:true,
    responsive: {
      0: {
        items: 2 
      },
      400: {
        items: 3
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    },
    nav: false
  }
  
  constructor() { }

  ngOnInit(): void {
  }


  
  // // Clients carousel (uses the Owl Carousel library)
  // $(".clients-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     768: {
  //       items: 4
  //     },
  //     900: {
  //       items: 6
  //     }
  //   }
  // });

}
