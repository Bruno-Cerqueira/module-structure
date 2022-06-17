import { Injectable } from '@angular/core';
import { ChatModule } from './chat/chat.module';

@Injectable({
  providedIn: ChatModule
})
export class PhChatService  {

  constructor() { }

  call() {
    console.log('a')
  }
}
