import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExampageComponent } from './view-exampage.component';

describe('ViewExampageComponent', () => {
  let component: ViewExampageComponent;
  let fixture: ComponentFixture<ViewExampageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExampageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
