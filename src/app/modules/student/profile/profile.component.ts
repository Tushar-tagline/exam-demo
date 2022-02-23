import { Component, OnInit } from '@angular/core';
import { Profiles } from 'src/app/interface/userinterface';
import { UserserviesService } from 'src/app/servies/userservies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public studentprofile=[{
    email:'',
    name:'',
    role:'',
    _id:''
  }]
  
  // public datalode: boolean = false;
  constructor(private userService: UserserviesService) { }

  ngOnInit(): void {
    this.userService.viewprofile().subscribe((data:any) => { console.log(data)
    this.studentprofile=data.data
    console.log('this.studentprofile :>> ', this.studentprofile);
    // this.datalode=true;
    })
  }

}

