import { Component, OnInit } from '@angular/core';
import { Studentlist } from 'src/app/userinterface';
import { UserserviesService } from 'src/app/userservies.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public studentlist: Studentlist[] = []
  public datalode: boolean = true;

  constructor(private userService: UserserviesService) { }

  ngOnInit(): void {
    this.userService.studentlist().subscribe((data: any) => {
      console.log(data)
      this.studentlist = data.data;
      this.datalode = false
    })

  }

}
