import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionRouteComponent } from './new-question-route.component';

describe('NewQuestionRouteComponent', () => {
  let component: NewQuestionRouteComponent;
  let fixture: ComponentFixture<NewQuestionRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
