import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgToastService } from 'ng-angular-popup';
import { Examlist } from 'src/app/interface/userinterface';
import { UserserviesService } from 'src/app/servies/userservies.service';
import { ExamPaperComponent } from '../exam-paper/exam-paper.component';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  public examlists:Examlist[] = [
    {
      Result: '',
      email: '',
      notes: '',
      subjectName: '',
      _id:''
    }
  ]
  public datalode: boolean =false;
  constructor(private userService: UserserviesService,private toster: NgToastService,public modelservies: NgbModal) { }

  ngOnInit(): void {
    this.userService.examlist().subscribe((data: any) => {
      console.log(data)
      this.examlists = data.data
      console.log('this.examLists :>> ', this.examlists);
      this.datalode = true;
      if (data.statusCode === 200) {
        this.toster.success({ detail: "View exam successfully", summary: "View exam successfully", duration: 4000 })
      }
      else {
        this.toster.error({ detail: "error message", summary: "View exam  is failed", duration: 4000 })
      }
    })
  }
  exampepar(id:any){
    this.userService.stuexamlist(id).subscribe((res:any)=>{
      const modelRef=this.modelservies.open(ExamPaperComponent);
      modelRef.componentInstance.paper=res?.data;
      console.log(this.modelservies)
    })
  }

}
