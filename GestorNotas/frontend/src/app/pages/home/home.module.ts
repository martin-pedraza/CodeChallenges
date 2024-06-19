import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavModule } from '../../components/partials/nav/nav.module';
import { NoteModule } from '../../components/note/note.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavModule,
    NoteModule
  ]
})
export class HomeModule { }
