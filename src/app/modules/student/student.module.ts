import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from 'src/app/modules/student/student-routing.module';
import { DashboardComponent } from 'src/app/modules/student/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/modules/student/profile/profile.component';
import { ExamListComponent } from 'src/app/modules/student/exam-list/exam-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { ExamPaperComponent } from 'src/app/modules/student/exam-paper/exam-paper.component';
import { EditProfileComponent } from 'src/app/modules/student/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ExamListComponent,
    ExamPaperComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CoreModule,

  ]
})
export class StudentModule { }
