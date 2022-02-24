//IUser is SignUp interface
export interface IUser {
    name: string,
    email: string,
    password: string,
    role: IRole
}
export interface ISignUpRes {
    message: string,
    statusCode: number,
    data: IUser[]
}
export interface IRole {
    teacher: string,
    student: string
}
//ILogin is Login interface 
export interface Ilogin {
    email: string,
    password: string
    token: string,
    role: string
}
export interface IloginRes {
    message: string,
    statusCode: number,
    data: Ilogin[]
}
// IStudentList is studentlist interface
export interface IStudentlist {
    status: string,
    _id: number,
    name: string,
    email: string
}
export interface IStudentlistRes {
    message: string,
    statusCode: number,
    data: IStudentlist[]
    count: number
}
//IViewExam is viewexampage interface
export interface IviewExam {
    _id: string,
    subjectName: string,
    email: string,
    notes: string
}
export interface IviewExamPageRes {
    message: string,
    statusCode: number,
    data: IviewExam[]
}
// IexamList is student exam-list interface
export interface IExamlist {
    _id: string,
    subjectName: string,
    email: string,
    notes: string
    Result: string
}
export interface IExamlistRes {
    message: string,
    statusCode: number,
    userId: string,
    data: IExamlist[]
}
// Iprofiles is profile interface
export interface IProfiles {
    _id: string,
    name: string,
    email: string,
    role: IRole
}
export interface IProfileRes {
    message: string,
    statusCode: number,
    data: IProfiles[]
}
//ExamDetail is student View exam-page interface
export interface IExamDetail {
    question: string,
    options: string;
    _id: string
}
export interface IExamPaper {
    message: string,
    statusCode: number,
    data: IExamDetail[]
}




