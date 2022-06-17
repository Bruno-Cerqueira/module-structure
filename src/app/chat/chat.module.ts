import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { PhChatServiceModule } from '../ph-chat-service/ph-chat-service.module';



@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    PhChatServiceModule,
    CommonModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
