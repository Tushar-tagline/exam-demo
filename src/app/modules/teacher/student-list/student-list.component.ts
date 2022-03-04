import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { IShowStudentRes, IStudentlist, IStudentlistRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';
import { ShowstudentdataComponent } from 'src/app/modules/teacher/showstudentdata/showstudentdata.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
  public studentlist: IStudentlist[] = []
  public datalode: boolean = true;

  constructor(
    private userService: UserserviesService,
    public modelservies: NgbModal,
    private toster: NgToastService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getStudentlist();
  }

  public getStudentlist(): void {
    const studentlist: IStudentlistRes = this.activatedRoute.snapshot.data['studentlists'];
    this.studentlist = studentlist.data;
    this.datalode = false
    if (studentlist.statusCode === 200) {
      this.toster.success({ detail: "View Studentlist successfully", summary: "View Studentlist successfully", duration: 2000 })
    } else {
      this.toster.error({ detail: "error message", summary: "View Studentlist is failed", duration: 2000 })
    }
  }

  public viewstudent(id: string): void {
    this.userService.particularstudentdata(id).subscribe((res: IShowStudentRes) => {
      const modelRef = this.modelservies.open(ShowstudentdataComponent);
      modelRef.componentInstance.user = res?.data;
      modelRef.componentInstance.student = res?.data[0].Result;
    })
  }
}
