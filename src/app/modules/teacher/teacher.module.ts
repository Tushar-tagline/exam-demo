import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewExampageComponent } from './view-exampage/view-exampage.component';
import { ShowstudentdataComponent } from './showstudentdata/showstudentdata.component';
import { ViewexamdetailComponent } from './viewexamdetail/viewexamdetail.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { VerifiedstudentComponent } from './verifiedstudent/verifiedstudent.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentListComponent,
    ViewExampageComponent,
    ShowstudentdataComponent,
    ViewexamdetailComponent,
    VerifiedstudentComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    RouterModule,
    CoreModule
  ],

})
export class TeacherModule { }
