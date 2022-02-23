import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'exam-list',component:ExamListComponent
  },
  {
    path:'**',
    redirectTo:'student'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
