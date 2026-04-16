import { Injectable } from '@angular/core';
import { Api } from './api';
import { Pixel } from './interfaces/PixelInterface';
import { WebSocketMessage } from 'rxjs/internal/observable/dom/WebSocketSubject';

@Injectable({
  providedIn: 'root',
})
export class RoomApi extends Api {
  private wsUrl = "ws://10.234.197.18:5294/api"

  private socket!: WebSocket;

  public connect = (roomId: string) => {
    const token = sessionStorage.getItem('token')
    if(!token)
      return
    
    this.socket = new WebSocket(`${this.wsUrl}/${roomId}?token=${encodeURIComponent(token)}`);
    this.socket.onopen = (event) => {
      console.log("Connection Created");
    }

    this.socket.onmessage = (event: MessageEvent) => {
      const message: WebSocketMessage<any> = JSON.parse
    }

    this.socket.onerror = (err) => {
      console.log("ERROR! ", err);
    }

    this.socket.onclose = () => {
      console.log("Connection Ended!");
      
    }
  }

  public closeConnection = () => {
     if(this.socket)
        this.socket.close(); 
  }

  public updatePixel = (data: Pixel) => {
    if(this.socket.readyState === WebSocket.OPEN){
      this.socket.send(JSON.stringify(data));
    } else {
      console.log("WebSocket Not Connected!");
      
    }
  } 
}
