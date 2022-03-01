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

  public redirect(): void {
    this.route.navigate(['./teacher/student-list'])
  }

  public render(): void {
    this.route.navigate(['./teacher/view-exampage'])
  }

  public renders(): void {
    this.route.navigate(['/teacher/verified-student'])
  }

  public redirects(): void {
    this.route.navigate(['/user/reset-password'])
  }

  public CreateExam(): void {
    this.route.navigate(['/teacher/CreateExam'])
  }
}
