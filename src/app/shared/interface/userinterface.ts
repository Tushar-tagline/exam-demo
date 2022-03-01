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
    _id: string,
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
    notes: string,
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
    role: string
}
export interface IProfileRes {
    message: string,
    statusCode: number,
    data: IProfiles
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

export interface IExamDeleteRes {
    message: string,
    statusCode: number,
    data: IExamlist[]
}
export interface IverifiedStudent {
    _id: string,
    name: string,
    email: string,
    status: string
}
export interface IverifiedStudentRes {
    message: string,
    statusCode: number,
    data: IverifiedStudent[]
}
export interface IresetPassword {
    id: string,
    name: string,
    email: string,
}
export interface IresetPasswordRes {
    message: string,
    statusCode: number,
    data: IresetPassword
}
//teacher/ student-list interface
export interface IShowStudentRes {
    message: string,
    statusCode: number,
    data:IStudentdata[]
}
export interface IStudentdata{
    id: string,
    name: string,
    email: string,
    Result:IStudentdataResult[]
}
export interface IStudentdataResult {
    rank: number
    resultStatus: string
    score: number
    studentId: string
    subjectName: string
    __v: number
    _id: string
}
export interface IViewExamPageRes {
    message: string,
    statusCode: number,
    data:IViewExamPagedata
}
export interface IViewExamPagedata{
    id: string,
    name: string,
    email: string,
    questions:IViewExamPageQues
}
export interface IViewExamPageQues{
    answer:string,
    options: []
    question:string
}





