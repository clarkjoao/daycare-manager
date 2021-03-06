import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { ClassroomListComponent } from './home/classroom-list/classroom-list.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { StudentsformComponent } from './students/studentsform/studentsform.component';
import { ClassroomformComponent } from './classrooms/classroomform/classroomform.component';
import { TeachersformComponent } from './teachers/teachersform/teachersform.component';
//Moduels
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StudentsComponent,
    DashboardComponent,
    HomeComponent,
    CardComponent,
    ClassroomListComponent,
    TeachersComponent,
    ClassroomsComponent,
    StudentsformComponent,
    ClassroomformComponent,
    TeachersformComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
