import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowUsersListComponent } from './show-users-list/show-users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { Router, Routes } from '@angular/router';

const appRoute : Routes=[
  {path: 'showList' , component: ShowUsersListComponent },
  {path: 'addUser' , component: RegisterUserComponent },
  {path: 'editUser' , component: EditUserComponent },
]
@NgModule({
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
export class AppModule { }
