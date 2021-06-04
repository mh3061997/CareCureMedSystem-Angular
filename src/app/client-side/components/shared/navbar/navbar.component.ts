import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import {
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { AppointmentClientDialogComponent } from '../../appointment-client-dialog/appointment-client-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faPhoneAlt = faPhoneAlt;
  public isMobileLayout = false;

  constructor(public dialogAddAppointment: MatDialog,
    public authService: AuthService,
    private currentRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {

    this.isMobileLayout = window.innerWidth <= 1200;
    
    this.router.events.subscribe((evt) => { 
      if (!(evt instanceof NavigationEnd))
       { return; } // Scroll to the top of the page window.scrollTo(0, 0); // This closes the top nav 
       $(document).click((event) => { const click = $(event.target); const _open = $('.navbar-collapse').hasClass('show'); if (_open === true && !click.hasClass('navbar-toggler')) { $('.navbar-toggler').click(); } }); 
      });

     
  
  }

 
  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    this.isMobileLayout = width <= 1200;
    console.log("mobile",this.isMobileLayout);

  }



openNewAppointmentDialog() {
  const dialogRef = this.dialogAddAppointment.open(AppointmentClientDialogComponent, { 
    disableClose: true,
    autoFocus: false,
      maxHeight: '90vh' //you can adjust the value as per your view
 });


  if (this.router.url === '/login-client') {
    this.router.navigate(['']);
  }
  dialogRef.afterClosed().subscribe();

}

isShowMyHistory(){
  return this.authService.isUserLoggedIn() && this.authService.isUserPatient();
}

isShowAdminPanel(){

  return this.authService.isUserLoggedIn() && (this.authService.isUserAdmin() || this.authService.isUserDoctor());

}
}
