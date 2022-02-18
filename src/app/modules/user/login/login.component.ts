import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { loginInter } from 'src/app/userinterface';
import { UserserviesService } from 'src/app/userservies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public token!: any;
  

  constructor(private userService: UserserviesService, private toster: NgToastService,private route:Router) { }

  ngOnInit(): void {

  }
loginSubmit(event: any) {
    console.log('event :>> ', event.value);
    this.userService.signIn(event.value).subscribe((res: any) => {
      console.log('res.data.token :>> ', res.data.token);
      if (res.statusCode === 200) {
        this.token=localStorage.setItem('token',res.data.token)
        this.toster.success({ detail: "successfully message", summary: "successfully signin", duration: 4000 })
      } else {
        this.toster.error({ detail: "error message", summary: "signin is failed", duration: 4000 })
      }

    });

  }
}



