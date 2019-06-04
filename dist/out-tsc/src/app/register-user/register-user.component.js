import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
let RegisterUserComponent = class RegisterUserComponent {
    constructor(storage) {
        this.storage = storage;
        this.data = [];
    }
    ngOnInit() {
        console.log(window.localStorage.length);
        console.log(this.storage);
        this.formdata = new FormGroup({
            emailid: new FormControl("", Validators.compose([
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ])),
            url: new FormControl("", Validators.compose([Validators.required, Validators.pattern(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/)])),
            name: new FormControl("", Validators.compose([Validators.required])),
            birthdate: new FormControl("", Validators.compose([Validators.required])),
            description: new FormControl("", Validators.compose([Validators.required])),
            gender: new FormControl("", Validators.compose([Validators.required])),
            phone: new FormControl("", Validators.compose([Validators.required, Validators.pattern(/(7|8|9)\d{9}/)]))
        });
    }
    phoneValidation(formcontrol) {
        console.log(formcontrol);
        if (formcontrol.value.length == 10) {
            return { "phone": true };
        }
    }
    onClickSubmit(data1) {
        console.log(data1);
        console.log(this.data);
        this.emailid = data1.emailid;
        let key = window.localStorage.length;
        this.storage.set(key.toString(), data1);
        this.data = [];
    }
};
RegisterUserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register-user',
        templateUrl: './register-user.component.html',
        styleUrls: ['./register-user.component.scss']
    }),
    tslib_1.__param(0, Inject(LOCAL_STORAGE)),
    tslib_1.__metadata("design:paramtypes", [WebStorageService])
], RegisterUserComponent);
export { RegisterUserComponent };
//# sourceMappingURL=register-user.component.js.map