import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  public forgetpassword!: FormGroup
  constructor(private userservie:UserserviesService) { }

  ngOnInit(): void {
    this.forgetpassword = new FormGroup({
      'email':new FormControl()
    })
  }
  onSubmit(){
    const data ={email:this.forgetpassword.value.email}
    console.log()
      this.userservie.forgetPassword(data).subscribe((res:any)=>{
        console.log(res.data)
        console.log('res :>> ', res);
      })
  }
}
