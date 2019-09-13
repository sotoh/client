import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    this.socket.connect();    
    this.socket.message.subscribe(data => {
      this.responses.push(data);
      this.answer = data;
      console.log(this.responses);
    })
  }
  send() {
    this.socket.emitMessages({source: 'web', info:this.text},'message');
  }
  title = 'ngclient';
  responses:string []=[];
  answer;
  text;
  constructor(private socket: WebsocketService) {}
}
