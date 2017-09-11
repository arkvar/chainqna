import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducer from 'app/reducers';
import * as navigation from 'app/actions/navigation';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  isNavigationVisible$: Observable<boolean>;
  isNavigationVisible: boolean;

  constructor(private store: Store<reducer.State>) {
    this.isNavigationVisible$ = this.store.select(reducer.getNavigationVisibility);
  }  

  ngOnInit() {
  }

  closeNavigation() {
    this.isNavigationVisible = false;
    this.store.dispatch(new navigation.CloseNavigationAction());
  }

  openNavigation() {
    this.isNavigationVisible = true;
    this.store.dispatch(new navigation.OpenNavigationAction());
  }

  handleNavigationClick() {
    if (this.isNavigationVisible) {
      this.closeNavigation();
    }
    else {
      this.openNavigation();
    }
  }
}
