import { DonutsShopPage } from './app.po';

describe('donuts-shop App', () => {
  let page: DonutsShopPage;

  beforeEach(() => {
    page = new DonutsShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
