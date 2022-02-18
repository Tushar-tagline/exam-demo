import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviesService } from 'src/app/userservies.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signup!: FormGroup
  public role: Array<any> = [{
    id: '1',
    value: 'Techer'
  },
  {
    id: '2',
    value: 'Student'
  }
  ]
  constructor(private userservies: UserserviesService) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-z]).{6,32}$'),
      ]),
       role: new FormControl(null, Validators.required)
    });
  }
  public onSubmit(): void {
    const data = this.signup.value;
    console.log(data, "data")
    this.userservies.signUp(data).subscribe((res: any) => {
      console.log('res :>> ', res);
      alert('please check email');

    });
  }
  // get name() {
  //   return this.signup.get('name')
  // }
  // get email() {
  //   return this.signup.get('email')
  // }
  // get password() {
  //   return this.signup.get('password')
  // }
  // get roles() {
  //   return this.signup.get('selected')
  // }
}
