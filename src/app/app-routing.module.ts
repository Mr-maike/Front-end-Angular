import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LanguagesComponent } from './languages/languages.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'jobs', component:JobsComponent},
  {path:'languages', component:LanguagesComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}