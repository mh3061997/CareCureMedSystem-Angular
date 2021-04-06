import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ClientContainerComponent } from './components/shared/client-container/client-container.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { servicesComponent } from './components/med-services/services.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogsComponent } from './components/blogs/blogs.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [NavbarComponent,
    ClientContainerComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    servicesComponent,
    FooterComponent,
    DoctorsComponent,
    LoginClientComponent,
    SignupClientComponent,
    BlogsComponent,
    MyHistoryComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule 
    ]
})
export class ClientSideModule { }
