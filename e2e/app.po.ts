/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class AppPage {
  headerText = element(by.css('.navbar-brand'));

  navigateTo() {
    return browser.get('/');
  }

  clickReload() {
    this.headerText.click();
  }

  getParagraphText() {
    return element(by.css('.navbar-brand')).getText();
  }
}
