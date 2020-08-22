import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [StudentsComponent, DashboardComponent, HomeComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
