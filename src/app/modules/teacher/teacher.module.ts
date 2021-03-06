import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from 'src/app/modules/teacher/dashboard/dashboard.component';
import { StudentListComponent } from 'src/app/modules/teacher/student-list/student-list.component';
import { ViewExampageComponent } from 'src/app/modules/teacher/view-exampage/view-exampage.component';
import { ShowstudentdataComponent } from 'src/app/modules/teacher/showstudentdata/showstudentdata.component';
import { ViewexamdetailComponent } from 'src/app/modules/teacher/viewexamdetail/viewexamdetail.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { VerifiedstudentComponent } from 'src/app/modules/teacher/verifiedstudent/verifiedstudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateexamComponent } from 'src/app/modules/teacher/createexam/createexam.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StudentListComponent,
    ViewExampageComponent,
    ShowstudentdataComponent,
    ViewexamdetailComponent,
    VerifiedstudentComponent,
    CreateexamComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule
  ],
})
export class TeacherModule { }
