import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iexamdetail } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {
  public exampaperdetail:Iexamdetail[]=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserserviesService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.userService.stuexamlist(id).subscribe((res: any) => {
      console.log(res)
      this.exampaperdetail = res.data
    })
  }
  // public close(): void {
  //   this.activeModal.close();
  // }
}
