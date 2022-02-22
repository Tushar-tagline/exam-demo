import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-showstudentdata',
  templateUrl: './showstudentdata.component.html',
  styleUrls: ['./showstudentdata.component.scss']
})
export class ShowstudentdataComponent implements OnInit {
  @Input() public user: any;
  @Input() public student: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  public close(): void {
    this.activeModal.close();
  }
}
