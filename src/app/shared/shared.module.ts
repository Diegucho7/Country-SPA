import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/home-page/about-page/about-page.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/components/contact/contact.component';



@NgModule({
  declarations: [
  
    HomePageComponent,
       AboutPageComponent,
       SidebarComponent,
       ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent
  ]
})
export class SharedModule { }
