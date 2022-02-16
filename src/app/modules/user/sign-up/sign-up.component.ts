import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public role:Array<any>=[{
    id:'1',
    value:'Techer'
  },
    {
      id:'2',
      value:'Student'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
