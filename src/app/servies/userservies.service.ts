import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Examlist, loginInter, Profiles, Studentlist, Userinterface, viewExam } from '../interface/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviesService {
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
  public studentlist():Observable <Studentlist>{
    let headers = new HttpHeaders()
     headers=headers.set('content-type','application/json')
     headers=headers.set('Access-Control-Allow-Origin', '*');
     headers=headers.set('access-token', `${this.getToken}`);
     return this.http.get<Studentlist>(this.url + 'dashboard/Teachers',{headers:headers})
   }
   public particularstudentdata(studentid:any):Observable <Studentlist>{
    let headers = new HttpHeaders()
     headers=headers.set('content-type','application/json')
     headers=headers.set('Access-Control-Allow-Origin', '*');
     headers=headers.set('access-token', `${this.getToken}`);
     return this.http.get<Studentlist>(this.url + 'dashboard/Teachers/viewStudentDetail?id='+studentid,{headers:headers})
   }
   public viewexam():Observable <viewExam>{
    let headers = new HttpHeaders()
     headers=headers.set('content-type','application/json')
     headers=headers.set('Access-Control-Allow-Origin', '*');
     headers=headers.set('access-token', `${this.getToken}`);
     return this.http.get<viewExam>(this.url + 'dashboard/Teachers/viewExam',{headers:headers})
   }   
   public particularexam(examid:any){
    let headers = new HttpHeaders()
    headers=headers.set('content-type','application/json')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    headers=headers.set('access-token', `${this.getToken}`);
    return this.http.get<viewExam>(this.url + 'dashboard/Teachers/examDetail?id='+examid,{headers:headers})
   }
   public viewprofile():Observable<Profiles>{
    let headers = new HttpHeaders()
    headers=headers.set('content-type','application/json')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    headers=headers.set('access-token', `${this.getToken}`);
    return this.http.get<Profiles>(this.url +'student/getStudentDetail',{headers:headers})
   }
   public examlist():Observable<Examlist>{
    let headers = new HttpHeaders()
    headers=headers.set('content-type','application/json')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    headers=headers.set('access-token', `${this.getToken}`);
    return this.http.get<Examlist>(this.url +'student/studentExam',{headers:headers})
   }
   public stuexamlist(stuexamid:any):Observable<any>{
     let headers = new HttpHeaders()
     headers=headers.set('content-type','application/json');
     headers=headers.set('Access-Control-Allow-origin','*');
     headers=headers.set('access-token',`${this.getToken}`);
     return this.http.get<any>(this.url+'/student/examPaper?id='+stuexamid,{headers:headers})
   }
}
