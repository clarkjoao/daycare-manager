import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

//Route
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

// Shared
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [HomeComponent, StudentsComponent, DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  exports: [RouterModule],
})
export class DashboardModule {}
