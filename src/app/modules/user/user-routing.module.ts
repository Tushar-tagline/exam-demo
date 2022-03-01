import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from 'src/app/modules/user/forgetpassword/forgetpassword.component';
import { LoginComponent } from 'src/app/modules/user/login/login.component';
import { ResetpasswordComponent } from 'src/app/modules/user/resetpassword/resetpassword.component';
import { SignUpComponent } from 'src/app/modules/user/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetpasswordComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
