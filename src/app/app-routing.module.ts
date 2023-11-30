import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponentComponent } from './LandingPageComponent/landing-page-component.component';
import {FSLComponent } from './fsl/fsl.component';

const routes: Routes = [
  { path: '', component: LandingPageComponentComponent },
  { path: 'FaceSnap', component: FSLComponent },
  
  /*{
    path:"achref",
    component:Tp1Component
  }*/
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
