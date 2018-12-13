import { Component, Inject } from '@angular/core';
// import { MailService } from './services/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  /*template: `<div>
    <h2>1. Hello Angular!</h2>
    <h2>2. Create a Simple Angular 2 Component</h2>
    <h2>3. Manage Angular 2 Events with Events and Refs</h2>
    <h2>4. Control Angular 2 Events with $event and Event Handlers</h2>
    <app-simple-form></app-simple-form>
    <h2>5. Share Services and Data with Angular 2 Dependency Injection</h2>
    <p>{{ wmMail.message }}</p>
    <h2>6. Provide and Share Values with Angular 2 Dependency Injection</h2>
    <p>{{ wmAPI }}</p>
    <h2>7. Loop Through Angualr 2 Components with ngFor</h2>
    <ul>
      <li *ngFor="let msg of wmMail.message">
        {{ msg }}
      </li>
    </ul>
    <h2>8. Pass Values into Angular 2 Components with @Input</h2>
    <p>@Input allows you to pass data into your controller and templates through html and defining custom properties. 
    This allows you to easily reuse components and have them display different values for each instance of the renderer.</p>
    <ul>
      <app-simple-form 
        *ngFor="let msg of wmMail.message"
        [msgReceived]="msg"
      >
      </app-simple-form>
    </ul>
    <h2>9. Sync Values from Inputs with Angular 2’s ngModel Two-Way Binding</h2>
    <p>Two-way binding still exists in Angular 2 and ngModel makes it simple. The syntax is a combination of the input and 
    (output) syntax to represent that the data is being pushed out and pulled in.</p>
    <ul>
      <app-simple-form 
        *ngFor="let msg of wmMail.message"
        [msgReceived]="msg"
      >
      </app-simple-form>
    </ul>
    <h2>10. Pass Events from Angular 2 Components with @Output</h2>
    <p>Components push out events using a combination of an @Output and an EventEmitter. This allows a clean separation 
    between reusable Components and application logic. This lesson shows how to use @Output to create an update event and 
    then listen for the event in your application.</p>
    <ul>
      <li *ngFor="let msg of wmMail.messages">
        {{ msg.id + " - " + msg.text }}
      </li>
    </ul>
    <app-simple-form
      *ngFor="let msg of wmMail.messages"
      [msgReceived]="msg.text"
      (modify)="onModify(msg.id, $event.text)"
    >
    </app-simple-form>
    <h2>11. Write CSS Inside of Angular 2 Components</h2>
    <p>Many Components require different styles based on a set of conditions. Angular 2 helps you style your Components by allows 
    you to define CSS and styles inline, then choosing which styles to use based on the current values in your Controller.</p>
    <ul>
      <li *ngFor="let msg of wmMail.messages">
        {{ msg.id + " - " + msg.text }}
      </li>
    </ul>
    <app-simple-form
      *ngFor="let msg of wmMail.messages"
      [msgReceived]="msg.text"
      (modify)="onModify(msg.id, $event.text)"
    >
    </app-simple-form>
  </div>`,
  styles: [`
    app-simple-form{
      margin-bottom: 10px;
    }
  `]*/
})
export class AppComponent {
  title = 'Angular';

  // Inject service (defined in app.module) in the constructor of the component
  // constructor(private wmMail: MailService){
  constructor(
    @Inject('mail') private wmMail,
    @Inject('api') private wmAPI
  ) {

  }

  onModify(id, text) {
    // console.log(event)
    this.wmMail.modify(id, text)
  }
}
