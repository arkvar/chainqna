import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [routerTransition]
})

export class PageComponent implements OnInit {

  navigationSideMenu = [
    { link: 'questions', label: 'Questions' },
    { link: 'favorites', label: 'Favorites' },
    { link: 'profile', label: 'Profile' }
  ];

  constructor() { }

  ngOnInit() { }

}
