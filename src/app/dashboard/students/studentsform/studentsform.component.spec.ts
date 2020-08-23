import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsformComponent } from './studentsform.component';

describe('StudentsformComponent', () => {
  let component: StudentsformComponent;
  let fixture: ComponentFixture<StudentsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
