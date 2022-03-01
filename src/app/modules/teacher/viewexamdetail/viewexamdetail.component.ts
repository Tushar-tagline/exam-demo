import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewexamdetail',
  templateUrl: './viewexamdetail.component.html',
  styleUrls: ['./viewexamdetail.component.scss']
})
export class ViewexamdetailComponent implements OnInit {
  @Input() public que: any;

  constructor(private activemodal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.activemodal.close()
  }
}
