import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamListResolver } from 'src/app/shared/resolved/exam-list.resolver';
import { ExamPaperResolver } from 'src/app/shared/resolved/exam-paper.resolver';
import { ProfileResolver } from 'src/app/shared/resolved/profile.resolver';
import { DashboardComponent } from 'src/app/modules/student/dashboard/dashboard.component';
import { ExamListComponent } from 'src/app/modules/student/exam-list/exam-list.component';
import { ExamPaperComponent } from 'src/app/modules/student/exam-paper/exam-paper.component';
import { ProfileComponent } from 'src/app/modules/student/profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: { userprofile: ProfileResolver }
  },
  {
    path: 'exam-list',
    component: ExamListComponent,
    resolve: { examlists: ExamListResolver }
  },
  {
    path: 'exam-paper/:id',
    component: ExamPaperComponent,
    resolve: { exampaper: ExamPaperResolver }
  },
  {
    path: '**',
    redirectTo: 'student'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
