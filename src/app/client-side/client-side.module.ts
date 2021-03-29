import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientContainerComponent } from './components/client-container/client-container.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';


@NgModule({
  declarations: [NavbarComponent,
    ClientContainerComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    SpecializationsComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule
  ]
})
export class ClientSideModule { }
