import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './navigation/login/login.component';
import { HomeComponent } from './navigation/home/home.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './navigation/create/create.component';
import { ModifyComponent } from './navigation/modify/modify.component';
import { DeleteComponent } from './navigation/delete/delete.component';
import { DisplayComponent } from './navigation/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    ModifyComponent,
    DeleteComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
