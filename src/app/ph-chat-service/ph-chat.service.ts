import { Injectable } from '@angular/core';
import { PhChatServiceModule } from './ph-chat-service.module';

@Injectable({
  providedIn: PhChatServiceModule
})
export class PhChatService  {

  constructor() { }

  call() {
    console.log('a')
  }
}
