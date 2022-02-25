import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedstudentComponent } from './verifiedstudent.component';

describe('VerifiedstudentComponent', () => {
  let component: VerifiedstudentComponent;
  let fixture: ComponentFixture<VerifiedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
