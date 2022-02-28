import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateexamComponent } from './createexam/createexam.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { VerifiedstudentComponent } from './verifiedstudent/verifiedstudent.component';
import { ViewExampageComponent } from './view-exampage/view-exampage.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'view-exampage',
    component: ViewExampageComponent
  },
  {
    path: 'verified-student',
    component: VerifiedstudentComponent
  },
  {
    path:'CreateExam',
    component:CreateexamComponent
  },
  {
    path: '**',
    redirectTo: 'teacher'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
