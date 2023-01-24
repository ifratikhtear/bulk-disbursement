import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from './core/core.module';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    NgxSpinnerModule

    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
