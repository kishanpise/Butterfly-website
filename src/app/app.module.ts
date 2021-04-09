import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Nav2Component } from './nav2/nav2.component';
import { SectionComponent } from './section/section.component';
import { Demo2Component } from './demo2/demo2.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { SightingComponent } from './sighting/sighting.component';
import { appRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Nav2Component,
    SectionComponent,
    Demo2Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    SightingComponent,
    
  ],
  imports: [
    BrowserModule,
    appRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
