import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { ContactListComponent } from './contact-list/contact-list.component';



@NgModule({
  declarations: [
    ContactAddComponent,
    ContactEditComponent,
    ContactDeleteComponent,
    ContactListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
