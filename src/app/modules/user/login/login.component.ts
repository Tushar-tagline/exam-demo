import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Ilogin, IloginRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public token!: any;
  constructor(private userService: UserserviesService,
    private toster: NgToastService,
    private route: Router
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  loginSubmit(event: any): void {
    console.log('event :>> ', event.value);
    this.userService.signIn(event.value).subscribe((res: any) => {
      console.log(res)
      console.log('res.data.token :>> ', res.data.token);
      if (res.statusCode === 200 && res.data.role === 'teacher') {
        this.token = localStorage.setItem('token', res.data.token);
        this.route.navigate(['teacher/dashboard']);
        this.toster.success({ detail: "successfully message", summary: "successfully signin", duration: 4000 })
      }
      else if (res.statusCode === 200 && res.data.role === 'student') {
        this.token = localStorage.setItem('token', res.data.token);
        this.route.navigate(['student/dashboard']);
        this.toster.success({ detail: "successfully message", summary: "successfully signin", duration: 4000 })
      }
      else {
        this.toster.error({ detail: "error message", summary: "signin is failed", duration: 4000 })
      }
    });
  }
}





