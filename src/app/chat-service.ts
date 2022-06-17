import { BehaviorSubject } from "rxjs";

export abstract class ChatService {
  abstract call(): void;
  abstract sub: BehaviorSubject<number>;

  t(){
    return console.log('t')
  }
}