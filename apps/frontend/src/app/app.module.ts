import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
