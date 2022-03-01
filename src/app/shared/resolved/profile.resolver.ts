import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProfileRes } from '../interface/userinterface';
import { UserserviesService } from '../servies/userservies.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Observable<IProfileRes>>{
  constructor(private userserives: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProfileRes> {
    return this.userserives.viewprofile();
  }
}
