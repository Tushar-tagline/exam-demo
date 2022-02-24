import { Token } from "@angular/compiler"
import { LoginComponent } from "src/app/modules/user/login/login.component"

export interface IUser {
    name:string,
    email:string,
    password:string,
    role:IRole
}
export interface IRole {
    teacher:string,
    student:string
}
export interface Ilogin{
    email:string,
    password:string
    token:string,
    role:string
}
export interface IStudentlist{
    status:string,
    _id:number,
    name:string,
    email:string
}
export interface IviewExam{
    _id:string,
    subjectName:string,
    email:string,
    notes:string
}
export interface IProfiles{
    _id:string,
    name:string,
    email:string,
    role:IRole
}
export interface IExamlist{
    _id:string,
    subjectName:string,
    email:string,
    notes:string
    Result:string
}
// export interface IviewExamPage{
//     data:Array<string>,
//     message:string,
//     statusCode:number,
//     userId:string
// }
export interface Iloginres{
    message:string,
    statusCode:number,
    data:Ilogin[]
}
export interface Iexamdetail{
    question:string,
    options:string;
    _id:string
}