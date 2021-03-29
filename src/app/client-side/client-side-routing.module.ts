import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'home',component:HomeComponent
},{
  path:'about-us',component:HomeComponent
},{
  path:'contact-us',component:HomeComponent
},{
  path:'doctors',component:HomeComponent
},{
  path:'login-client',component:HomeComponent
},{
  path:'signup-client',component:HomeComponent
},{
  path:'specializations',component:HomeComponent
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
