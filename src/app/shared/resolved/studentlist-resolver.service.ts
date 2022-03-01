import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { IStudentlistRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Injectable({
  providedIn: 'root'
})
export class StudentlistResolver implements Resolve<Observable<IStudentlistRes>> {
  constructor(private userService: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IStudentlistRes> {
    return this.userService.studentlist();
  }
}
