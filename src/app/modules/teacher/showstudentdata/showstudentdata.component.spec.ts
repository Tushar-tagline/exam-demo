import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstudentdataComponent } from 'src/app/modules/teacher/showstudentdata/showstudentdata.component';

describe('ShowstudentdataComponent', () => {
  let component: ShowstudentdataComponent;
  let fixture: ComponentFixture<ShowstudentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowstudentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
