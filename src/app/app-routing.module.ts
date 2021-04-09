import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { Section5Component } from './section5/section5.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { SightingComponent } from './sighting/sighting.component';
import { Section2Component } from './section2/section2.component';




const routes: Routes = [
  {path:'',component:SectionComponent},
  {path:'home',component:SectionComponent},
  {path:'info',component:Section5Component},
  {path:'endangered',component:Section3Component},
  {path:'world', component:Section4Component},
  {path:'sighting', component:Section2Component},
  {path:'aboutus', component:SightingComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
