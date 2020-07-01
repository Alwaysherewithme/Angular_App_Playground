# Source
- [Get Started With Angular](https://egghead.io/courses/get-started-with-angular)
  - Say "Hello World" to Angular 2
  - Create a Simple Angular 2 Component
  - Manage Angular 2 Elements with Events and Refs
  - Control Angular 2 Events with $event and Event Handlers
  - Share Services and Data with Angular 2 Dependency Injection
  - Provide and Share Values with Angular 2 Dependency Injection
  - Loop Through Angular 2 Components with ngFor
  - Pass Values into Angular 2 Components with @Input
  - Sync Values from Inputs with Angular 2’s ngModel Two-Way Binding
  - Pass Events from Angular 2 Components with @Output
  - Write CSS Inside of Angular 2 Components
  - Apply CSS Classes Conditionally with Angular 2’s ngClass
  - Use Global CSS Inside Angular 2 Components

    > npm version

    > npm install -g @angular/cli@1.7.4

    > ng new angular_app_playground / ng new angular_app_playground (--style=scss --routing)

    > cd angular_app_playground

    > ng server / npm start

    > ng generate component simple-form (--inline-template --inline-style) / ng g c simple-form (-it -is)

    > ng g s services/mail

- [Learn Angular 6 in 60 Minutes - Free Beginners Crash Course](https://www.youtube.com/watch?v=z4JUm0Bq9AM)
  - Install Angular 6 with the Angular CLI
  - Understand and Create Components
  - Understand and Create Services
  - Working with HTML & CSS in Angular 6
  - Working with Angular 6 Routing
  - Working with the Angular 6 HTTP Client
  - Angular 6 Animation
  - https://coursetro.com/posts/code/154/Angular-6-Tutorial--Learn-Angular-6-in-this-Crash-Course

- [Angular Tutorial for Beginners Learn Angular from Scratch]()
  - What is Angular?
  ```
  A framework for building client applications in HTML, CSS, and JavaScript/TypeScript
  ```

  - Why do we need Angular?
  ```
  Revealing Module Pattern
  Prototype Pattern
  ```

  - Benefits of Using Angular
  ```
  Give our applications a clean structure
  Includes a lot of re-usable code
  Makes our applications more testable
  ```

  - Architecture of Angular Apps

  - HTTP Services / APIs
  ```
  Endpoints that are accessible via the HTTP protocol.

  Front-end -(HTTP)-> Back-end
  ```

  - Hot Module Replacement(HMR)
  ```
  20:00
  webpack
  
  Whenever source file is modified, webpack automaticaly refresh the page.
  ```
  - 
    > npm version

    > npm install -g @angular/cli@1.7.4

    > ng --version

    > ng new angular_app_playground / ng new angular_app_playground (--style=scss --routing)

    > cd angular_app_playground

    > ng server / npm start

    > ng generate component simple-form (--inline-template --inline-style) / ng g c simple-form (-it -is)

    > ng g s services/mail

- [Angular 2 In 60 Minutes]()
  - What is Angular 2?
  ```
  Angular 2 is a JS client side framework for creating powerful web applications.

  Created and maintained by Google.
  
  The most popular JS framework to date.
  
  What HTML would be if it were created for dynamic web applications.
  ```

  - What Angular 2 is NOT
  ```
  A server side framework/technology

  JS library(jQuery, React, etc)
  
  Design Pattern
  
  Platform or language(.NET, Java)
  
  Plugin or extension
  ```

  - What Angular 2 Offers
  ```
  Dynamic HTML

  Powerful templates
  
  Fast rendering
  
  HTTP services
  
  Component encapsulation
  
  Form & input handing
  
  Event handling
  
  Routing
  
  Latest JS standards
  ...

  - What's new from Angular 1?
  ```
  No more controllers and scope

  Components/reusable code
  
  Reduced learning curve
  
  TypeScript & ES2015/ES6
  
  Better mobile support
  
  RxJS & Observables
  ```

  - What is TypeScript?
  ```
  A strict superset of JS with added features

  Maintained by Microsoft
  
  Optional static typing
  
  Class-based object-oriented programming
  
  Resembles languages like Java & C/C++
  ```

  - Components
  ```
  Main way to build and specify elements and logic on the page.

  Basic building block of the UI. An Angular application is a tree of Angular components.

  Decorators allow us to mark a class as an Angular component & provide metadata that determines how the component should be processed, instantiated and used at runtime.
  ```

  - Services
  ```
  Sevices are used for reusable data services to share between components throughout an application.

  Refactoring data access to a separate service keeps the component lean and focused on supporting the view.

  Services are invariably asynchronous. We can return data as promise or an observable using RxJS.
  ```

  - Angular 2 Installation Methods
  ```
  From scratch

  Using the quickstart: https://github.com/angualr/quickstart

  Angular-CLI Tool: npm install -g angular-cli
  ```



- []()
---

# Angular_App_Playground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
