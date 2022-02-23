export interface Userinterface {
    name:string,
    email:string,
    password:string,
    role:Role
}
export interface Role {
    teacher:string,
    student:string
}
export interface loginInter{
    email:string,
    password:string
}
export interface Studentlist{
    status:string,
    _id:number,
    name:string,
    email:string
}
export interface viewExam{
    _id:string,
    subjectName:string,
    email:string,
    notes:string
}
export interface Profiles{
    _id:string,
    name:string,
    email:string,
    role:Role
}
export interface Examlist{
    _id:string,
    subjectName:string,
    email:string,
    notes:string
    Result:string
}