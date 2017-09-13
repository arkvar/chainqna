import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import {
  MdButtonModule,
  MdToolbarModule,
  MdMenuModule,
  MdSelectModule,
  MdTabsModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdChipsModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdCardModule,
  MdListModule,
  MdIconModule,
  MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdToolbarModule,
    MdSelectModule,
    MdTabsModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdChipsModule,
    MdCardModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdListModule,
    MdMenuModule,
    MdIconModule,
    MdTooltipModule
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    FormsModule,

    MdButtonModule,
    MdMenuModule,
    MdTabsModule,
    MdChipsModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdCheckboxModule,
    MdCardModule,
    MdSidenavModule,
    MdListModule,
    MdSelectModule,
    MdToolbarModule,
    MdIconModule,
    MdTooltipModule
  ]
})
export class SharedModule { }
