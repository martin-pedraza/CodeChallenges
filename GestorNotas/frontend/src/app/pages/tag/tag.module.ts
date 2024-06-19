import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { NavModule } from '../../components/partials/nav/nav.module';
import { NoteModule } from '../../components/note/note.module';


@NgModule({
  declarations: [
    TagComponent
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    NavModule,
    NoteModule
  ]
})
export class TagModule { }
