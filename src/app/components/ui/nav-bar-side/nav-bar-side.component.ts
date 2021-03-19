import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  faPercent,
  faUserNurse,
  faStethoscope,
  faProcedures,
  faFileAlt,
  faDollarSign,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar-side',
  templateUrl: './nav-bar-side.component.html',
  styleUrls: ['./nav-bar-side.component.css']
})

export class NavBarSideComponent{
  //Icon variables
  faUserNurse = faUserNurse; //doctor icon 
  faStethoscope = faStethoscope;//appointment icon
  faProcedures = faProcedures;//patient icon
  faFileAlt = faFileAlt;//invoice icon
  faPercent = faPercent;
  faDollarSign = faDollarSign;
  faUsers = faUsers;
  
  @ViewChild('drawer', { static: false }) drawer:ElementRef; 


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public authService: AuthService, private breakpointObserver: BreakpointObserver
    ,private renderer:Renderer2) { }


 

// clickHandler(event:any) {
//   event.toggle();
// }

// _clickHandler = this.clickHandler.bind(this);
isPrivShowNav(){
 
  return this.authService.isUserAdmin() || this.authService.isUserReceptionist();
}
isUserAdmin(){
  return this.authService.isUserAdmin();
}

toggleNav(){
  this.renderer.selectRootElement(this.drawer).toggle();
}
// // (click)="drawer.toggle()"
//   isPrivShowNav(){
//     if(this.navToggleBtn){
//       console.log("nav");
      
//       if(this.authService.isUserAdmin()){
//         console.log("admin");
        
//         this.navToggleBtn.nativeElement.addEventListener('click', this._clickHandler); 
//       }else{
//         console.log("not admin");
        
//         this.navToggleBtn.nativeElement.removeEventListener('click', this._clickHandler); 
  
//       }
//     }
    
//   }

}
