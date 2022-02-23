import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {
  @Input() public paper:any
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  public close(): void {
    this.activeModal.close();
  }
}
