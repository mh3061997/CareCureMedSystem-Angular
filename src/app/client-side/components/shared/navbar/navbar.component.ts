import { Component, OnInit } from '@angular/core';
import {
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faPhoneAlt=faPhoneAlt;
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
