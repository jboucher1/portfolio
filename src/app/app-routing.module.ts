import { ProjectIframeComponent } from './project-iframe/project-iframe.component';
import { AllComponent } from './project-views/all/all.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'projects/:id', component:ProjectIframeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
