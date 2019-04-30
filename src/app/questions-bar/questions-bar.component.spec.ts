import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsBarComponent } from './questions-bar.component';

describe('QuestionsBarComponent', () => {
  let component: QuestionsBarComponent;
  let fixture: ComponentFixture<QuestionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
