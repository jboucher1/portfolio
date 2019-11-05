import { ProjectIframeComponent } from './project-iframe/project-iframe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component:MainComponent, pathMatch: 'full'},
  {path:'projects/:id', component:ProjectIframeComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
