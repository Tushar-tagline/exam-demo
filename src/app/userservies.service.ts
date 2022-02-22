import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginInter, Userinterface } from './userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviesService {
  public token:any;
  private url = environment.url;
  getToken = localStorage.getItem('token')

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  public signUp(data: Userinterface): Observable<Userinterface> {
    return this.http.post<Userinterface>(this.url + 'users/signUp', data);
  }
  public signIn(data: any): Observable<loginInter> {
    return this.http.post<loginInter>(this.url + 'users/Login' , data);
  }
  public studentlist(){
    let headers = new HttpHeaders()
     headers=headers.set('content-type','application/json')
     headers=headers.set('Access-Control-Allow-Origin', '*');
     headers=headers.set('access-token', `${this.getToken}`);
     return this.http.get(this.url + 'dashboard/Teachers',{headers:headers})
   }
}
