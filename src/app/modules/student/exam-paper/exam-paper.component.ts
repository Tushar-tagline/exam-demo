import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { IExamDetail, IExamPaper } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {
  public exampaperdetail: IExamDetail[] = []
  public datalode: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserserviesService,
    private toster: NgToastService
  ) { }

  ngOnInit(): void {
    this.getExamPaper()
  }

  public getExamPaper() {
    const id = this.activatedRoute.snapshot.params['id']
    const stuexamPaper: IExamPaper = this.activatedRoute.snapshot.data['exampaper']
    this.exampaperdetail = stuexamPaper.data
    this.datalode = true;
    if (stuexamPaper.statusCode === 200) {
      this.toster.success({ detail: "View exam-paper successfully", summary: "View exam-paper successfully", duration: 4000 })
    }
    else {
      this.toster.error({ detail: "error message", summary: "View exam-paper  is failed", duration: 4000 })
    }
  }
}
