import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { GoBackComponent } from './go-back/go-back.component';

@NgModule({
  declarations: [
    HeaderComponent,
    GoBackComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule {
}
