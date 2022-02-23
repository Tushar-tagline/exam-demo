import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Studentlist } from 'src/app/interface/userinterface';
import { UserserviesService } from 'src/app/servies/userservies.service';
import { ShowstudentdataComponent } from '../showstudentdata/showstudentdata.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public studentlist: Studentlist[] = []
  public datalode: boolean = true;

  constructor(private userService: UserserviesService, public modelservies: NgbModal) { }

  ngOnInit(): void {
    this.userService.studentlist().subscribe((data: any) => {
      console.log(data)
      this.studentlist = data.data;
      this.datalode = false
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
