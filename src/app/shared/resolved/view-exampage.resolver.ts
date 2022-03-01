import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserserviesService } from '../servies/userservies.service';

@Injectable({
  providedIn: 'root'
})
export class ViewExampageResolver implements Resolve<any> {
  constructor(private userService: UserserviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.viewexam()
  }
}
