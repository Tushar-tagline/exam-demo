import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginInter, Userinterface } from './userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviesService {
  public token:any
  private url = environment.url;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  public signUp(data: Userinterface): Observable<Userinterface> {
    return this.http.post<Userinterface>(this.url + 'users/signUp', data);
  }
  public signIn(data: any): Observable<loginInter> {
    return this.http.post<loginInter>(this.url + 'users/Login' , data);
  }

}
