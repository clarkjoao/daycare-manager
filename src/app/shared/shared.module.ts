import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Angular Materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    ToolbarComponent,
  ],
})
export class SharedModule {}
