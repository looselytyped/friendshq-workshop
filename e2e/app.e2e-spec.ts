import { FriendsHqPage } from './app.po';

describe('friends-hq App', () => {
  let page: FriendsHqPage;

  beforeEach(() => {
    page = new FriendsHqPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
