import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IviewExamPageRes } from '../interface/userinterface';
import { UserserviesService } from '../servies/userservies.service';

@Injectable({
  providedIn: 'root'
})
export class ExamListResolver implements Resolve<Observable<IviewExamPageRes>> {
  constructor(private userservies: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IviewExamPageRes> {
    return this.userservies.examlist()
  }
}
