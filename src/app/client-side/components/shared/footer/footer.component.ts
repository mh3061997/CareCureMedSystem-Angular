import { Component, OnInit } from '@angular/core';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faTiktok=faTiktok;
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }


  isShowMyHistory(){
    return this.authService.isUserLoggedIn() && this.authService.isUserPatient();
  }

}
