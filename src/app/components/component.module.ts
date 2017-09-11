import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from '../components/page/page.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavigationComponent } from '../components/navigation/navigation.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    NavigationComponent,
    PageComponent,
    HeaderComponent
  ],
  exports: [
    NavigationComponent,
    PageComponent,
    HeaderComponent
  ],
})
export class ComponentModule { }
