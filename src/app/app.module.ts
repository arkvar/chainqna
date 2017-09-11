import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ComponentModule } from './components/component.module';
import { HomeModule } from './routes/home/home.module';

import { reducer } from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ComponentModule,
    HomeModule,
    StoreModule.provideStore(reducer)
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
