import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IStudentdata, IStudentdataResult } from 'src/app/shared/interface/userinterface';

@Component({
  selector: 'app-showstudentdata',
  templateUrl: './showstudentdata.component.html',
  styleUrls: ['./showstudentdata.component.scss']
})
export class ShowstudentdataComponent implements OnInit {
  @Input() public user: IStudentdata[] = [];
  @Input() public student: IStudentdataResult[] = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.activeModal.close();
  }
}
