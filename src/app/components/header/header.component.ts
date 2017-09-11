import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onNavigationToggle = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  handleNavigationIconClick() {
    this.onNavigationToggle.emit();
  }
}
