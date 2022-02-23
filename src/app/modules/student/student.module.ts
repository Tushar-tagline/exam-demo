import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamListComponent } from './exam-list/exam-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ExamListComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
