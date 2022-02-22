import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewExampageComponent } from './view-exampage/view-exampage.component';
import { ShowstudentdataComponent } from './showstudentdata/showstudentdata.component';
import { ViewexamdetailComponent } from './viewexamdetail/viewexamdetail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentListComponent,
    ViewExampageComponent,
    ShowstudentdataComponent,
    ViewexamdetailComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    RouterModule
  ],
  
})
export class TeacherModule { }
