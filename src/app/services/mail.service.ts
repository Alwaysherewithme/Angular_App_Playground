import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  // message = 'You got the message in mail service!'

  message = [
    "msg 1",
    "msg 2",
    "msg 3"
  ]

  messages = [
    { id: 0, text: 'msg 1' },
    { id: 1, text: 'msg 2' },
    { id: 2, text: 'msg 3' }
  ]
  
  modify(id, text) {
    this.messages = this.messages.map(
      m => m.id === id ? {id, text} : m
    )
  }
  
  constructor() { }


}
