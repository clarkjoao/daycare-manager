import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

//Route
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [HomeComponent, StudentsComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [RouterModule],
})
export class DashboardModule {}
