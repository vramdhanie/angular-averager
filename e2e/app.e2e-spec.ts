import { AngularAveragerPage } from './app.po';

describe('angular-averager App', () => {
  let page: AngularAveragerPage;

  beforeEach(() => {
    page = new AngularAveragerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
