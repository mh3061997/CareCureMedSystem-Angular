import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppointmentClientDialogComponent } from './components/appointment-client-dialog/appointment-client-dialog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PostComponent } from './components/blogs/post/post.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { servicesComponent } from './components/med-services/services.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { ClientContainerComponent } from './components/shared/client-container/client-container.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { VideoGalleryComponent } from './components/video-gallery/video-gallery.component';

const routes: Routes = [
  {
    path: '', component: ClientContainerComponent, children: [
      {
        path: '', component: HomeComponent
      }, {
        path: 'about-us', component: AboutUsComponent
      }, {
        path: 'contact-us', component: ContactUsComponent
      }, {
        path: 'doctors', component: DoctorsComponent
      }, {
        path: 'login-client', component: LoginClientComponent
      }, {
        path: 'signup-client', component: SignupClientComponent
      }, {
        path: 'services', component: servicesComponent
      }, {
        path: 'history', component: MyHistoryComponent
      }, {
        path: 'blog', component: BlogsComponent
      }, {
        path: 'gallery', component: GalleryComponent
      }, {
        path: 'blog/:id', component: PostComponent
      }, {
        path: "video-gallery", component: VideoGalleryComponent
      }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
