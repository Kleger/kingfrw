import { KingfrwPage } from './app.po';

describe('kingfrw App', () => {
  let page: KingfrwPage;

  beforeEach(() => {
    page = new KingfrwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
