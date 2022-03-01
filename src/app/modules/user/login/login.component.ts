import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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
  public loginSubmit(event: any): void {
    this.userService.signIn(event.value).subscribe((res: any) => {
      if (res.statusCode === 200 && res.data.role === 'teacher') {
        this.token = localStorage.setItem('token', res.data.token);
        this.route.navigate(['teacher/dashboard']);
        this.toster.success({ detail: "successfully message", summary: "successfully signin", duration: 4000 })
      } else if (res.statusCode === 200 && res.data.role === 'student') {
        this.token = localStorage.setItem('token', res.data.token);
        this.route.navigate(['student/dashboard']);
        this.toster.success({ detail: "successfully message", summary: "successfully signin", duration: 4000 })
      } else {
        this.toster.error({ detail: "error message", summary: "signin is failed", duration: 4000 })
      }
    });
  }
}





