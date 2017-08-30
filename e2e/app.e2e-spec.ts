import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Play 2 Live');
  });
});
