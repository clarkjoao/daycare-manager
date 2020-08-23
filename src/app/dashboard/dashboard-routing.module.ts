import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';

import { StudentsformComponent } from './students/studentsform/studentsform.component';
import { ClassroomformComponent } from './classrooms/classroomform/classroomform.component';
import { TeachersformComponent } from './teachers/teachersform/teachersform.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'students/form',
        component: StudentsformComponent,
      },
      {
        path: 'teachers',
        component: TeachersComponent,
      },
      {
        path: 'teachers/form',
        component: TeachersformComponent,
      },
      {
        path: 'classrooms',
        component: ClassroomsComponent,
      },
      {
        path: 'classrooms/form',
        component: ClassroomformComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
