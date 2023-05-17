import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  new_notifications: any;
  viewed_notifications: any;

  socket: any;
  readonly uri: string = 'ws://10.1.1.177:1680?username=support_admin';
  // readonly uri: string = 'http://localhost:3000';

  constructor() {
    this.socket = io(this.uri);
  }

  listen(eventName: string) {
    return new Observable((subscribe) => {
      this.socket.on(eventName, (data: any) => {
        subscribe.next(data);
      });
    });
    // return this.socket.on(eventName);
  }

  emit(eventName: string, data: any) {
    console.log(eventName);

    this.socket.emit(eventName, data);
  }
}
