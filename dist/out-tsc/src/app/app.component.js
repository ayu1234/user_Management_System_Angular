import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
let AppComponent = class AppComponent {
    constructor(storage) {
        this.storage = storage;
        this.title = 'user-system-management';
    }
    registerUserFunc() {
        this.registerUser = true;
        this.userslist = false;
    }
    showUserslist() {
        this.userslist = true;
        this.registerUser = false;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    tslib_1.__param(0, Inject(LOCAL_STORAGE)),
    tslib_1.__metadata("design:paramtypes", [WebStorageService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map