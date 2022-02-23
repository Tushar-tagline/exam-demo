import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path:'teacher',loadChildren:()=>import('./modules/teacher/teacher.module').then(m=>m.TeacherModule)
  },
  {
    path:'student',loadChildren:()=>import('./modules/student/student.module').then(m=>m.StudentModule)
  },
  {
    path: '**',
    redirectTo: 'user'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
