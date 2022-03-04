import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExamDeleteRes, IExamlistRes, IExamPaper, IforgetData, IforgetPasswordRes, Ilogin, IloginUserRes, IProfileRes, IresetPassword, IresetPasswordRes, IShowStudentRes, ISignUpRes, IStudentlistRes, IverifiedStudentRes, IViewExamPageRes, IviewExamPageRes } from 'src/app/shared//interface/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviesService {
  private url = environment.url;
  public getToken = localStorage.getItem('token')

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  public signUp(data: ISignUpRes): Observable<ISignUpRes> {
    return this.http.post<ISignUpRes>(this.url + 'users/signUp', data);
  }

  public signIn(data: Ilogin): Observable<IloginUserRes> {
    return this.http.post<IloginUserRes>(this.url + 'users/Login', data);
  }

  public forgetPassword(data: IforgetData): Observable<IforgetPasswordRes> {
    return this.http.post<IforgetPasswordRes>(this.url + 'users/ForgotPassword', data);
  }

  public createExam(data: any): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.post<any>(this.url + 'dashboard/Teachers/Exam', data, { headers: headers })
  }

  public resetpassword(data: IresetPassword): Observable<IresetPasswordRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.post<IresetPasswordRes>(this.url + 'users/ResetPassword?', data, { headers: headers })
  }

  public studentlist(): Observable<IStudentlistRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IStudentlistRes>(this.url + 'dashboard/Teachers', { headers: headers })
  }

  public particularstudentdata(studentid: string): Observable<IShowStudentRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IShowStudentRes>(this.url + 'dashboard/Teachers/viewStudentDetail?id=' + studentid, { headers: headers })
  }

  public viewexam(): Observable<IviewExamPageRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IviewExamPageRes>(this.url + 'dashboard/Teachers/viewExam', { headers: headers })
  }

  public particularexam(examid: string) {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IViewExamPageRes>(this.url + 'dashboard/Teachers/examDetail?id=' + examid, { headers: headers })
  }
  public viewprofile(): Observable<IProfileRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IProfileRes>(this.url + 'student/getStudentDetail', { headers: headers })
  }

  public examlist(): Observable<IExamlistRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IExamlistRes>(this.url + 'student/studentExam', { headers: headers })
  }

  public stuexamlist(id: string): Observable<IExamPaper> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('Access-Control-Allow-origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IExamPaper>(this.url + 'student/examPaper?' + 'id=' + id, { headers: headers })
  }

  public deleteExam(id: string = '62187dda7b7a94001541c893'): Observable<IExamDeleteRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('Access-Control-Allow-origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.delete<IExamDeleteRes>(this.url + 'dashboard/Teachers/deleteExam?id=' + id, { headers: headers })
  }

  public verifiedStudent(): Observable<IverifiedStudentRes> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('Access-control-Allows-origin', '*');
    headers = headers.set('access-token', `${this.getToken}`);
    return this.http.get<IverifiedStudentRes>(this.url + 'dashboard/Teachers/StudentForExam', { headers: headers })
  }
}
