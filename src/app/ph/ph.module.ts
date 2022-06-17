import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhRoutingModule } from './ph-routing.module';
import { PhComponent } from './ph.component';
import { ChatModule } from '../chat/chat.module';
import { PhChatService } from '../ph-chat-service/ph-chat.service';
import { ChatService } from '../chat-service';


@NgModule({
  declarations: [
    PhComponent
  ],
  imports: [
    CommonModule,
    PhRoutingModule,
    ChatModule
  ],
  providers: [
    { provide: ChatService, useExisting: PhChatService}
  ]
})
export class PhModule { }
