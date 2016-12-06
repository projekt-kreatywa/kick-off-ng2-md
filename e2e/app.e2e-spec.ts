import { KickOffNg2MdPage } from './app.po';

describe('kick-off-ng2-md App', function() {
  let page: KickOffNg2MdPage;

  beforeEach(() => {
    page = new KickOffNg2MdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
