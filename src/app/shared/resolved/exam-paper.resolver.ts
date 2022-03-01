import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IExamPaper } from '../interface/userinterface';
import { UserserviesService } from '../servies/userservies.service';

@Injectable({
  providedIn: 'root'
})
export class ExamPaperResolver implements Resolve<Observable<IExamPaper>> {
  constructor(private userservies: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IExamPaper> {
    return this.userservies.stuexamlist(route.params['id']);
  }
}
