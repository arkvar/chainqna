import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    IconComponent
  ],
  exports: [
    LoaderComponent,
    IconComponent
  ],
})
export class SharedModule { }
