import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserserviesService } from 'src/app/shared/servies/userservies.service';

@Component({
  selector: 'app-createexam',
  templateUrl: './createexam.component.html',
  styleUrls: ['./createexam.component.scss']
})
export class CreateexamComponent implements OnInit {
  public createexam!: FormGroup
  public exam!: FormArray
  public Question!: string;
  constructor(private formbulider: FormBuilder, private userservies: UserserviesService) { }

  ngOnInit(): void {
    this.createexam = new FormGroup({
      exam: new FormArray([
        this.createItem()
      ]),
    })
  }
  createItem(): FormGroup {
    return this.formbulider.group({
      Exam: '',
      Ans: '',
      opt1: '',
      opt2: '',
      opt3: '',
      opt4: '',
      notes:''
    });
  }
  get exams(): FormArray {
    return this.createexam.get('exam') as FormArray;
  }
  addquetion() {
    this.exams.push(this.createItem());
  }
  addexam() {
    const data = this.createexam.value
    console.log(data)
    this.userservies.createExam(data).subscribe((res: any) => {
      console.log(res.data);
      console.log(res);
    })
  }
}
