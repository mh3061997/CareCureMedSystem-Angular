import { Component } from '@angular/core';
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

export class NavBarSideComponent {
  //Icon variables
  faUserNurse = faUserNurse; //doctor icon 
  faStethoscope = faStethoscope;//appointment icon
  faProcedures = faProcedures;//patient icon
  faFileAlt = faFileAlt;//invoice icon
  faPercent = faPercent;
  faDollarSign = faDollarSign;
  faUsers = faUsers;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public authService: AuthService, private breakpointObserver: BreakpointObserver) { }

}
