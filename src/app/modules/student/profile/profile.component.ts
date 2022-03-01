import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { IProfileRes, IProfiles } from 'src/app/shared/interface/userinterface';
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
    private toster: NgToastService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userprofiles: IProfileRes = this.activatedRoute.snapshot.data['userprofile']
    this.studentprofile = [userprofiles.data];
    this.datalode = true;
    if (userprofiles.statusCode === 200) {
      this.toster.success({ detail: "View profile successfully", summary: "View profile successfully", duration: 4000 })
    }
    else {
      this.toster.error({ detail: "error message", summary: "View profile is failed", duration: 4000 })
    }

  }
}

