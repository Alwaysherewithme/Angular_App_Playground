import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // name = "Alwayshere";
  // name:string = 'Neveragain';
  name:string;
  age:number;
  showAge:boolean;
  email:string;
  /* address:{
    street:string,
    city:string,
    state:string
  } */
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService_wm: DataService) {    // Dependencies Injection
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...')
    this.name = 'Wenming';
    this.age = 30;
    this.showAge = false;
    this.email = 'wenming.w.zhou@pwc.com';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music']
    this.hello = 66;  // 'abc' false
    this.dataService_wm.getPosts().subscribe((posts => {
      // console.log(posts);
      this.posts = posts;
    }))
  }

  onClick() {
    // console.log('onClick ran...');
    this.name = 'Only Yesterday';
    this.hobbies.push('Travel');
  }

  addHobby(hobby) {
    console.log(hobby);
    // this.hobbies.push(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby_id) {
    console.log(hobby_id);
    for(let i=0; i<this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby_id) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  toggleAgeShow() {
    this.showAge = !this.showAge
  }
}

// create a class or interface here or inside another file and import
interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}