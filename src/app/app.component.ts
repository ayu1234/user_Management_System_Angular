import { Component, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registerUser:boolean;
  userslist:boolean;
 
  title = 'user-system-management';
  constructor(@Inject(LOCAL_STORAGE) public storage: WebStorageService){}

  registerUserFunc(){
    this.registerUser =true;
    this.userslist= false;
  }
  showUserslist(){
    this.userslist= true;
    this.registerUser =false;
  }
}
