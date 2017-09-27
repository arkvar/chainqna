import { Component, OnDestroy, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import {Store} from "@ngrx/store";
import {getQuestions} from "@app/core";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'app-theme';
  }

  ngOnInit(): void { }
}
