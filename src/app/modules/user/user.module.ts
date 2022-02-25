import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CoreModule } from 'src/app/core/core.module';




@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetpasswordComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShowHidePasswordModule,
    CoreModule
  ]
})  
export class UserModule { }
