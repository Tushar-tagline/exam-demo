import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  render():void {
    this.route.navigate(['./student/profile']);
  }
  redirect():void {
    this.route.navigate(['./student/exam-list'])
  }
  renders():void{
    this.route.navigate(['/user/reset-password'])
  }
}
