import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IViewExamPageQues } from 'src/app/shared/interface/userinterface';

@Component({
  selector: 'app-viewexamdetail',
  templateUrl: './viewexamdetail.component.html',
  styleUrls: ['./viewexamdetail.component.scss']
})
export class ViewexamdetailComponent implements OnInit {
  @Input() public que: IViewExamPageQues[] = [];

  constructor(private activemodal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.activemodal.close()
  }
}
