import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IverifiedStudentRes } from '../interface/userinterface';
import { UserserviesService } from '../servies/userservies.service';

@Injectable({
  providedIn: 'root'
})
export class ViewVerifiedStudentResolver implements Resolve<Observable<IverifiedStudentRes>> {
  constructor(private userService: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IverifiedStudentRes> {
    return this.userService.verifiedStudent()
  }
}