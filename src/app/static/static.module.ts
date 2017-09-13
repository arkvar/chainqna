import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class StaticModule { }
