import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhRoutingModule } from './ph-routing.module';
import { PhComponent } from './ph.component';
import { ChatModule } from '../chat/chat.module';


@NgModule({
  declarations: [
    PhComponent
  ],
  imports: [
    CommonModule,
    PhRoutingModule,
    ChatModule
  ]
})
export class PhModule { }
