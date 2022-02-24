import { Component, OnInit } from '@angular/core';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { IProfiles } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public studentprofile: IProfiles[] = [];
  public datalode: boolean = false;
  constructor(private userService: UserserviesService,
    private toster: NgToastService
  ) { }

  ngOnInit(): void {
    this.userService.viewprofile().subscribe((res: any):void => {
      console.log(res)
      this.studentprofile.push(res.data);
      this.datalode = true;
      console.log('this.studentprofile :>> ', this.studentprofile);
      if (res.statusCode === 200) {
        this.toster.success({ detail: "View profile successfully", summary: "View profile successfully", duration: 4000 })
      }
      else {
        this.toster.error({ detail: "error message", summary: "View profile is failed", duration: 4000 })
      }
    })
  }
}

