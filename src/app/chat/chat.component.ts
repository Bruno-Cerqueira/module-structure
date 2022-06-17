import { Component, OnInit } from '@angular/core';
import { PhChatService } from '../ph-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  call(){
    console.log('s');
  }
}
