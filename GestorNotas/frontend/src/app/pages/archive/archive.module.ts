import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive.component';
import { NavModule } from '../../components/partials/nav/nav.module';
import { NoteModule } from '../../components/note/note.module';


@NgModule({
  declarations: [
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    ArchiveRoutingModule,
    NavModule,
    NoteModule
  ]
})
export class ArchiveModule { }
