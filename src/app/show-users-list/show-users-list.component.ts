import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-show-users-list',
  templateUrl: './show-users-list.component.html',
  styleUrls: ['./show-users-list.component.scss']
})
export class ShowUsersListComponent implements OnInit {
  usersData=[];
  showList:boolean;
  formdata;
  datasubmit:boolean= false
  data:any=[];
  constructor(@Inject(LOCAL_STORAGE) public storage: WebStorageService){}

  ngOnInit() {
    this.showList = true;
    console.log(this.storage);
    console.log(window.localStorage)
    let data = window.localStorage;
    for (let [key, value] of Object.entries(data)) {
      console.log(key, value);
      let obj = JSON.parse(value)
      obj.id= key;
      this.usersData.push(obj);
      console.log(this.usersData)
    }
    console.log(window.localStorage.length);
    console.log(this.storage);
     this.formdata = new FormGroup({
        emailid: new FormControl("", Validators.compose([
           Validators.required,
           Validators.pattern("[^ @]*@[^ @]*")
        ])),
        url: new FormControl("",Validators.compose([Validators.required, Validators.pattern(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/)])),
        name: new FormControl("",Validators.compose([Validators.required])),
        birthdate: new FormControl("",Validators.compose([Validators.required])),
        description: new FormControl("",Validators.compose([Validators.required])),
        gender: new FormControl("",Validators.compose([Validators.required])),
        phone: new FormControl("", Validators.compose([Validators.required, Validators.pattern(/(7|8|9)\d{9}/)]))
     });
  }
  editUser(user){
    console.log(user);
    this.showList = false;
    this.data= user;
  }
  onClickSubmit(data1) {
    console.log(data1.id);
    console.log(this.data);
    console.log(this.data.id);
    this.datasubmit=true;
    let key = this.data.id;
    this.storage.set(key , this.data);
    console.log(this.storage);
  }

}
