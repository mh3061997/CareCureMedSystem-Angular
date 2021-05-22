import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppointmentClientDialogComponent } from '../appointment-client-dialog/appointment-client-dialog.component';
import { WordpressService } from '../wordpress.service';

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

  postsHtmlArr:any[];

  constructor(public dialogAddAppointment: MatDialog,private router:Router,private blogService:WordpressService) {



    blogService.getLatestFivePosts().subscribe(posts => {
      
      this.postsHtmlArr=posts.map(post =>{
        
        post.thumbnail=this.extractImgTag(post.content.rendered);
        return post;       
      });
      console.log(this.postsHtmlArr);
    });

  }
  public isMobileLayout = false;
  ngOnInit(): void {
    if(history.state.openReserveDialog){
      this.openNewAppointmentDialog();
    }
    this.isMobileLayout = window.innerWidth <= 768;
  
  console.log("mobile",this.isMobileLayout);
  
  }

  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    this.isMobileLayout = width <= 768;
    console.log("mobile",this.isMobileLayout);

  }

  
    


  extractImgTag(postHtml:any){
     //console.log("html"+postHtml);
    
    // console.log(postHtml.match(/<img [^>]*src="[^"]*"[^>]*>/gm));
    let imgTag = postHtml.match(/src="?([^"\s]+)(jp?g|png|gif)"/g);

    if(imgTag && imgTag[0]){
      return imgTag[0].split('=')[1].split('"')[1];
    }else{
      return null;
    }
  }

  openNewAppointmentDialog() {
    const dialogRef = this.dialogAddAppointment.open(AppointmentClientDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe();

  }

}
