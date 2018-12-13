import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  // template: `
  //   <p>
  //     <input #inputRef type="text" placeholder="the input is referenced!" />
  //     <button (click)="onWmClick(inputRef.value)">Submit</button>
  //   </p>
  // `,
  // template: `
  //   <div>
  //     {{ msgReceived }}
  //     <input #inputRef type="text" placeholder="the input is referenced!" />
  //     <button (mouseover)="onWmClick($event, inputRef.value)">Submit</button>
  //   </div>
  // `,
  // template: `
  //   <div>
  //     {{ msgReceived }}
  //     <input #inputRef type="text" [(ngModel)]="msgReceived" />
  //     <button (click)="modify.emit({ text: msgReceived })">Submit</button>
  //   </div>
  // `,
  template: `
    <div>
      <input #inputRef type="text" />
      <button (click)="modify.emit({ text: msgReceived })">Submit</button>
    </div>
  `,
  styles: [`
    :host{
      display: flex;
      flex-direction: column;
    }
    *{
      font-family: monospace;
    }
    input:focus{
      font-weight: bold;
      outline: none;
    }
    button{
      border: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() msgReceived

  @Output() modify = new EventEmitter()

  constructor() {
    // setInterval(() => {
    //   this.msgReceived = Math.floor(Math.random()*10).toString()
    // }, 1000)
  }

  ngOnInit() {
  }

  onWmClick(event, value) {
    console.log(event)
    console.log(value)
  }

}
