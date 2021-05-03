import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  showSpinner = false

  @Input() error: string | null;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.showSpinner = true;
    (this.authService.authenticate(this.username, this.password).subscribe(
      success => {
        this.invalidLogin = false
        this.showSpinner = false;
        this.redirectToResponsiblePage();
      },
      error => {
        this.invalidLogin = true
        this.error = error.error.message;
        this.showSpinner = false;

      }
    )
    );

  }

  redirectToResponsiblePage() {
    if (this.authService.isUserReceptionist()) {

      this.router.navigate(['admin', 'appointment']);

    } else if (this.authService.isUserDoctor()) {
      const doctorCode = this.authService.getLoggedInDoctorCode();
      this.router.navigate(['admin', 'doctor',doctorCode]);


    } else if (this.authService.isUserAdmin()) {

      this.router.navigate(['admin', 'appointment']);


    } else if (this.authService.isUserPatient()) {

      this.router.navigate(['history']);

    }

  }

}

