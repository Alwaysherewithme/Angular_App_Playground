import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DataService } from './services/data.service';
import { BoatComponent } from './components/boat/boat.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { MailService } from './services/mail.service';
import { PostsComponent } from './components/posts/posts.component';
import { DetailsComponent } from './components/details/details.component';

// Create routes
const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'boat',
    component: BoatComponent
  }
];

// Decorator: convert class into Angular Module(contains multiple components)
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SidebarComponent,
    BoatComponent,
    SimpleFormComponent,
    PostsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  // Dependencies Injection
  providers: [
    DataService,   // Singleton Pattern
    // MailService, 
    {provide: 'mail', useClass: MailService},
    {provide: 'api', useValue: 'localhost:3000/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
