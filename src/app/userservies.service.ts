import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginInter, Userinterface } from './userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviesService {

  private url = environment.url;
  constructor( private http:HttpClient) { }
  ngOnInit(): void {}

  public signUp(data: Userinterface): Observable<any> {
    return this.http.post(this.url + 'users/signUp', data);
  }
  public signIn(data:loginInter): Observable<any> {
    return this.http.post(this.url + 'users/Login', data);
  }
}
