import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatService } from '../chat-service';
import { PhChatServiceModule } from './ph-chat-service.module';

@Injectable({
  providedIn: PhChatServiceModule
})
export class PhChatService extends ChatService  {
  sub = new BehaviorSubject(Math.random());

  constructor() { 
    super()
  }

  call() {
    console.log('ph')
  }
}
