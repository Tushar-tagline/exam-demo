import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProfileRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Observable<IProfileRes>>{
  constructor(private userserives: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProfileRes> {
    return this.userserives.viewprofile();
  }
}
