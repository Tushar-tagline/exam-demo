import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { viewExam } from 'src/app/core/interface/userinterface';
import { UserserviesService } from 'src/app/core/servies/userservies.service';
import { ViewexamdetailComponent } from '../viewexamdetail/viewexamdetail.component';

@Component({
  selector: 'app-view-exampage',
  templateUrl: './view-exampage.component.html',
  styleUrls: ['./view-exampage.component.scss']
})
export class ViewExampageComponent implements OnInit {
  public viewexams = [
    {notes:'', _id:'', subjectName:'', email:'', _v:''}
  ];
  public datalode: boolean = true;
  constructor(private userService: UserserviesService,public modelservies: NgbModal) { }

  ngOnInit(): void {
    this.userService.viewexam().subscribe((data:any)=>{console.log(data)
      this.viewexams=data.data;
      this.datalode=false;
    })
    
  }
  particularexam(id:any){
    this.userService.particularexam(id).subscribe((res:any) => {
      const modelRef = this.modelservies.open(ViewexamdetailComponent);
       modelRef.componentInstance.que=res?.data.questions;
      
    })
  }

}
