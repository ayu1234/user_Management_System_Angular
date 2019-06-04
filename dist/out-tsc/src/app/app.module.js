import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowUsersListComponent } from './show-users-list/show-users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            RegisterUserComponent,
            ShowUsersListComponent,
            EditUserComponent
        ],
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            AppRoutingModule,
            StorageServiceModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map