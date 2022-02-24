import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { Studentlist } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';
import { ShowstudentdataComponent } from '../showstudentdata/showstudentdata.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public studentlist: Studentlist[] = []
  public datalode: boolean = true;

  constructor(private userService: UserserviesService, public modelservies: NgbModal,private toster:NgToastService) { }

  ngOnInit(): void {
    this.userService.studentlist().subscribe((data: any) => {
      console.log(data)
      this.studentlist = data.data;
      this.datalode = false
      if (data.statusCode === 200) {
        this.toster.success({ detail: "View Studentlist successfully", summary: "View Studentlist successfully", duration: 4000 })
      }
      else {
        this.toster.error({ detail: "error message", summary: "View Studentlist is failed", duration: 4000 })
      }
    })
  }
  viewstudent(id: any) {
    this.userService.particularstudentdata(id).subscribe((res: any) => {
      const modelRef = this.modelservies.open(ShowstudentdataComponent);
      modelRef.componentInstance.user = res?.data;
      modelRef.componentInstance.student = res?.data[0].Result;
    })
  }
}
