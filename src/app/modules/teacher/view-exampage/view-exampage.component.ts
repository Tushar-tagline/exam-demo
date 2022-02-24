import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { IviewExam, IviewExamPageRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';
import { ViewexamdetailComponent } from '../viewexamdetail/viewexamdetail.component';

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
  constructor(private userService: UserserviesService, public modelservies: NgbModal, private toster: NgToastService) { }

  ngOnInit(): void {
    this.userService.viewexam().subscribe((data: IviewExamPageRes): void => {
      console.log(data)
      this.viewexams = data.data;
      this.datalode = false;
      if (data.statusCode === 200) {
        this.toster.success({ detail: "View Exam-page successfully", summary: "View Exam-page  successfully", duration: 4000 })
      }
      else {
        this.toster.error({ detail: "error message", summary: "View Exam-page  is failed", duration: 4000 })
      }
    })
  }
  particularexam(id: any) {
    this.userService.particularexam(id).subscribe((res: any) => {
      const modelRef = this.modelservies.open(ViewexamdetailComponent);
      modelRef.componentInstance.que = res?.data.questions;

    })
  }

}
