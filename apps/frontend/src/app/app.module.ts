import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { rootState } from './store';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(rootState),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
