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
  redirect() {
    this.route.navigate(['./teacher/student-list'])
  }
  render() {
    this.route.navigate(['./teacher/view-exampage'])
  }
  renders(){
    this.route.navigate(['/teacher/verified-student'])
  }
}
