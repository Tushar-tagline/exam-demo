import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexamdetailComponent } from './viewexamdetail.component';

describe('ViewexamdetailComponent', () => {
  let component: ViewexamdetailComponent;
  let fixture: ComponentFixture<ViewexamdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewexamdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
