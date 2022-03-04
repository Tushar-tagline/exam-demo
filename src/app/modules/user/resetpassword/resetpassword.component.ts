import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { IresetPasswordRes } from 'src/app/shared/interface/userinterface';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  public resetpassword!: FormGroup
  constructor(private userservies: UserserviesService, private toster: NgToastService) { }

  ngOnInit(): void {
    this.resetpassword = new FormGroup({
      oldPassword: new FormControl(null),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-z]).{6,32}$'),]),
      ConfirmPassword: new FormControl(null)
    })
  }
  public onSubmit() {
    const data = this.resetpassword.value;
    return this.userservies.resetpassword(data).subscribe((res: IresetPasswordRes) => {
      if (res.statusCode === 200) {
        this.toster.success({ detail: "password change Successfully", summary: "password change Successfully", duration: 2000 })
      } else {
        this.toster.error({ detail: "error message", summary: "password change failed", duration: 2000 })
      }
    })
  }
}
