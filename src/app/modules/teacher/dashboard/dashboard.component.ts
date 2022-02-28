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
  redirect(): void {
    this.route.navigate(['./teacher/student-list'])
  }
  render(): void {
    this.route.navigate(['./teacher/view-exampage'])
  }
  renders(): void {
    this.route.navigate(['/teacher/verified-student'])
  }
  redirects(): void {
    this.route.navigate(['/user/reset-password'])
  }
  CreateExam(): void {
    this.route.navigate(['/teacher/CreateExam'])
  }
}
