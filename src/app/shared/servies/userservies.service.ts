import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExamlistRes, IExamPaper, Ilogin, IProfiles, ISignUpRes, IStudentlist, IStudentlistRes, IUser, IviewExam, IviewExamPageRes } from '../interface/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviesService {
  private url = environment.url;
  getToken = localStorage.getItem('token')

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  public signUp(data: ISignUpRes): Observable<ISignUpRes> {
    return this.http.post<ISignUpRes>(this.url + 'users/signUp', data);
  }
  public signIn(data: Ilogin): Observable<Ilogin> {
    return this.http.post<Ilogin>(this.url + 'users/Login', data);
  }
  public studentlist(): Observable<IStudentlistRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IStudentlistRes>(this.url + 'dashboard/Teachers', { headers: headers })
  }
  public particularstudentdata(studentid: any): Observable<IStudentlist> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IStudentlist>(this.url + 'dashboard/Teachers/viewStudentDetail?id=' + studentid, { headers: headers })
  }
  public viewexam(): Observable<IviewExamPageRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IviewExamPageRes>(this.url + 'dashboard/Teachers/viewExam', { headers: headers })
  }
  public particularexam(examid: any) {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IviewExam>(this.url + 'dashboard/Teachers/examDetail?id=' + examid, { headers: headers })
  }
  public viewprofile(): Observable<IProfiles> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IProfiles>(this.url + 'student/getStudentDetail', { headers: headers })
  }
  public examlist(): Observable<IExamlistRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IExamlistRes>(this.url + 'student/studentExam', { headers: headers })
  }
  public stuexamlist(id: any): Observable<IExamPaper> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('Access-Control-Allow-origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IExamPaper>(this.url + 'student/examPaper?' + 'id=' + id, { headers: headers })
  }
}
