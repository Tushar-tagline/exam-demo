import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';
import { IviewExamPageRes } from 'src/app/shared//interface/userinterface';

@Injectable({
  providedIn: 'root'
})
export class ViewExampageResolver implements Resolve<Observable<IviewExamPageRes>> {
  constructor(private userService: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IviewExamPageRes> {
    return this.userService.viewexam()
  }
}
