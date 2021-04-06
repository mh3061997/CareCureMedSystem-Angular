import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faKey,faUser
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  faKey=faKey;
  faUser=faUser;

  
  username = ''
  password = ''
  invalidLogin = false
  showSpinner=false

  @Input() error: string | null;

  constructor( private loginservice:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    this.showSpinner=true;
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['admin','patient'])
        this.invalidLogin = false
        this.showSpinner=false;
      },
      error => {
        this.invalidLogin = true
        this.error = error.error.message;
        this.showSpinner=false;

      }
    )
    );

  }
}
