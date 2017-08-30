import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UtilsModule } from './utils/utils.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './routes/home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
