import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomformComponent } from './classroomform.component';

describe('ClassroomformComponent', () => {
  let component: ClassroomformComponent;
  let fixture: ComponentFixture<ClassroomformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
