import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';

import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    PageComponent
  ],
  exports: [
    PageComponent
  ],
})
export class ComponentModule { }
