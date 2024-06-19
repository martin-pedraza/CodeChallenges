import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NoteComponent]
})
export class NoteModule { }
