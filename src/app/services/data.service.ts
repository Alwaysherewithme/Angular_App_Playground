import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http_wm: Http) {
    console.log('Data service connected...');
  }

  getPosts() {
    return this.http_wm.get('https://jsonplaceholder.typicode.com/posts').map(
      res => res.json()
    );
  }

  getUsers() {
    return this.http_wm.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http_wm.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

}
