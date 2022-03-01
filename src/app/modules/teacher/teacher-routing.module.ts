import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistResolver } from 'src/app/shared/resolved/studentlist-resolver.service';
import { ViewExampageResolver } from 'src/app/shared/resolved/view-exampage.resolver';
import { ViewVerifiedStudentResolver } from 'src/app/shared/resolved/view-verified-student.resolver';
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
    component: StudentListComponent,
    resolve: { studentlists: StudentlistResolver }
  },
  {
    path: 'view-exampage',
    component: ViewExampageComponent,
    resolve: { viewexampages: ViewExampageResolver }
  },
  {
    path: 'verified-student',
    component: VerifiedstudentComponent,
    resolve: { verifystudent: ViewVerifiedStudentResolver }
  },
  {
    path: 'CreateExam',
    component: CreateexamComponent
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
