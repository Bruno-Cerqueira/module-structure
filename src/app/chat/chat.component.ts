import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service';
import { PhChatService } from '../ph-chat-service/ph-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.sub.subscribe(console.log)
  }

  call(){
    this.chatService.call()
  }
}
