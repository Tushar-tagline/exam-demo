import { Component, OnInit } from '@angular/core';
import { UserserviesService } from 'src/app/userservies.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private userService: UserserviesService) { }

  ngOnInit(): void {
  this.userService.studentlist().subscribe((data)=>{console.log(data)})
  }

}
