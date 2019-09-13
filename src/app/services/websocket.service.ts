import { Injectable } from '@angular/core';
import Ws from '@adonisjs/websocket-client'
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private ws = Ws('ws://192.168.0.14:3333')
  private isConnected = false;
  private topic = null;
  private messageBehavior: BehaviorSubject<any>;
  public message: Observable<any>;
  constructor() 
  {
    this.messageBehavior = new BehaviorSubject<any>(null);
    this.message = this.messageBehavior.asObservable();
   }
  connect() {
    this.ws.connect();
    this.topic = this.ws.subscribe('test');
    this.listenMessages();
  }

  emitMessages(data, event: string) {
    this.topic.emit(event, data);
  }

  listenMessages() {
    this.topic.on('message', (server) => {
      this.messageBehavior.next(server);
    })
  }
   
  listenErrors() {
    this.topic.on('error', (error) => {
      console.log(error)
    })
   }

   listenState() {
    this.topic.on('open', () => {
      this.isConnected = true
    })
    
    this.topic.on('close', () => {
      this.isConnected = false
    })
   }
   
   close() {
    this.topic.on('close', () => {

    })
  }
}
