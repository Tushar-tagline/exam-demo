import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviesService } from 'src/app/userservies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: any;
  email: any;
  
  constructor(private userService:UserserviesService) { }

  ngOnInit(): void {
  }
  loginSubmit() {
    var data = {
      email:this.email,
      password:this.password
    }
    this.userService.signIn(data).subscribe((res:any) => {
      localStorage.setItem('user', JSON.stringify(res.data))
    })
  }
}
