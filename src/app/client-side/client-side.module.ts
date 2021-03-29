import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ClientContainerComponent } from './components/shared/client-container/client-container.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';


@NgModule({
  declarations: [NavbarComponent,
    ClientContainerComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    SpecializationsComponent,
    FooterComponent,
    DoctorsComponent,
    LoginClientComponent,
    SignupClientComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule
  ]
})
export class ClientSideModule { }
