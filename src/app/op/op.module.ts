import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpRoutingModule } from './op-routing.module';
import { OpComponent } from './op.component';
import { ChatModule } from '../chat/chat.module';
import { ChatService } from '../chat-service';
import { OpChatService } from '../op-chat.service';
import { PhChatService } from '../ph-chat-service/ph-chat.service';


@NgModule({
  declarations: [
    OpComponent
  ],
  imports: [
    CommonModule,
    OpRoutingModule,
    ChatModule
  ],
  providers: [
    { provide: ChatService, useExisting: OpChatService }
  ]
})
export class OpModule { }
