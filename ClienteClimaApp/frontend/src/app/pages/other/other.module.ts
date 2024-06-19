import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';
import { CardModule } from 'src/app/components/card/card.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OtherComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    CardModule,
    FormsModule
  ]
})
export class OtherModule { }
