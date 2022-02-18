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