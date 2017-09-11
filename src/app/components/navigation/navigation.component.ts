import { Component, Input, OnInit } from '@angular/core';

const ClassNames = {
  VISIBLE: 'root visible',
  HIDDEN: 'root hidden'
};

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  @Input() open: boolean = true;

  className: string = ClassNames.VISIBLE;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.className = this.open ? ClassNames.VISIBLE : ClassNames.HIDDEN;
  }
}
