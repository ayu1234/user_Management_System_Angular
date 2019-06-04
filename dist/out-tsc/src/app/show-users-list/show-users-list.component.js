import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
let ShowUsersListComponent = class ShowUsersListComponent {
    constructor(storage) {
        this.storage = storage;
        this.usersData = [];
    }
    ngOnInit() {
        console.log(this.storage);
        console.log(window.localStorage);
        let data = window.localStorage;
        for (let [key, value] of Object.entries(data)) {
            console.log(key, value);
            let obj = JSON.parse(value);
            obj.id = key;
            this.usersData.push(obj);
            console.log(this.usersData);
        }
    }
    editUser(user) {
        console.log(user);
    }
};
ShowUsersListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-show-users-list',
        templateUrl: './show-users-list.component.html',
        styleUrls: ['./show-users-list.component.scss']
    }),
    tslib_1.__param(0, Inject(LOCAL_STORAGE)),
    tslib_1.__metadata("design:paramtypes", [WebStorageService])
], ShowUsersListComponent);
export { ShowUsersListComponent };
//# sourceMappingURL=show-users-list.component.js.map