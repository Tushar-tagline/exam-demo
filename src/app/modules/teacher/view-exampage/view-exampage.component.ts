import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { IExamDeleteRes, IviewExam, IViewExamPageRes, IviewExamPageRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';
import { ViewexamdetailComponent } from 'src/app/modules/teacher/viewexamdetail/viewexamdetail.component';

@Component({
  selector: 'app-view-exampage',
  templateUrl: './view-exampage.component.html',
  styleUrls: ['./view-exampage.component.scss']
})
export class ViewExampageComponent implements OnInit {
  public viewexams = [
    { notes: '', _id: '', subjectName: '', email: '' }
  ];
  public datalode: boolean = true;
  constructor(
    private userService: UserserviesService,
    public modelservies: NgbModal,
    private toster: NgToastService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getExam();
  }

  public getExam(): void {
    const exampages: IviewExamPageRes = this.activatedRoute.snapshot.data['viewexampages']
    this.viewexams = exampages.data;
    this.datalode = false;
    if (exampages.statusCode === 200) {
      this.toster.success({ detail: "View Exam-page successfully", summary: "View Exam-page  successfully", duration: 2000 })
    }
    else {
      this.toster.error({ detail: "error message", summary: "View Exam-page  is failed", duration: 2000 })
    }
  }

  public particularexam(id: string): void {
    this.userService.particularexam(id).subscribe((res: IViewExamPageRes) => {
      console.log(res);
      const modelRef = this.modelservies.open(ViewexamdetailComponent);
      modelRef.componentInstance.que = res?.data.questions;
    })
  }

  public deleteexam(id: string): void {
    this.userService.deleteExam(id).subscribe((res: IExamDeleteRes) => {
      this.getExam();
    })
  }
}
