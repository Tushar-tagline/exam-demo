import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {
  public datalode: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.datalode = false;
  }
}
