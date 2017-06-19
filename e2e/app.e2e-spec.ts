import { NeutrinoWebPage } from './app.po';

describe('neutrino-web App', () => {
  let page: NeutrinoWebPage;

  beforeEach(() => {
    page = new NeutrinoWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
