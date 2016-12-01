import { SearchPersonPage } from './app.po';

describe('search-person App', function() {
  let page: SearchPersonPage;

  beforeEach(() => {
    page = new SearchPersonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
