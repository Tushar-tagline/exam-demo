import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ExamListComponent,
    ExamPaperComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CoreModule
  ]
})
export class StudentModule { }
