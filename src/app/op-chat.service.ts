import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatService } from './chat-service';

@Injectable({
  providedIn: 'root'
})
export class OpChatService extends ChatService {

  sub = new BehaviorSubject(Math.random());

  constructor() { 
    super()
  }

  call() {
    console.log('op')
  }
}
