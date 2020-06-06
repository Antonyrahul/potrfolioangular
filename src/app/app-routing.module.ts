import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {EducationComponent} from './education/education.component';
import {WorkComponent} from './work/work.component';
import {AcheivementsComponent} from './acheivements/acheivements.component'
import {ContactComponent} from './contact/contact.component'
import {HomepageComponent} from './homepage/homepage.component'
import {ProjectsComponent} from './projects/projects.component'


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:"intro",
    component:IntroComponent
  },
  {
    path:"education",
    component:EducationComponent
  },
  {
    path:"work",
    component:WorkComponent
  },
  {
    path:"acheivements",
    component:AcheivementsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
