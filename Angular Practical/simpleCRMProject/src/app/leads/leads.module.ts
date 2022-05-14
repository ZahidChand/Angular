import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsAddComponent } from './leads-add/leads-add.component';
import { LeadsEditComponent } from './leads-edit/leads-edit.component';
import { LeadsDeleteComponent } from './leads-delete/leads-delete.component';
import { LeadsListComponent } from './leads-list/leads-list.component';



@NgModule({
  declarations: [
    LeadsAddComponent,
    LeadsEditComponent,
    LeadsDeleteComponent,
    LeadsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
