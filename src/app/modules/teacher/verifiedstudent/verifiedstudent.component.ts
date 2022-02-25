import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { IverifiedStudent, IverifiedStudentRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-verifiedstudent',
  templateUrl: './verifiedstudent.component.html',
  styleUrls: ['./verifiedstudent.component.scss']
})
export class VerifiedstudentComponent implements OnInit {
  public verifiedstudentlist: IverifiedStudent[] = []
  public datalode: boolean = true;
  constructor(private userService: UserserviesService, private toster: NgToastService) { }

  ngOnInit(): void {
    this.getverifiedStudent()
  }
  getverifiedStudent(): void {
    this.userService.verifiedStudent().subscribe((res: IverifiedStudentRes) => {
      console.log(res)
      this.verifiedstudentlist = res.data;
      this.datalode = false;
      if (res.statusCode === 200) {
        this.toster.success({ detail: "View verify-student successfully", summary: "View verify-student  successfully", duration: 2000 })
      }
      else {
        this.toster.error({ detail: "error message", summary: "view verify-student is filled", duration: 2000 })
      }
    })
  }
}
