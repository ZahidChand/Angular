import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { ProfileListComponent } from './profile-list/profile-list.component';



@NgModule({
  declarations: [
    ProfileAddComponent,
    ProfileEditComponent,
    ProfileDeleteComponent,
    ProfileListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
