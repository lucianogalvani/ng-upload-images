import { NgUploadFilePage } from './app.po';

describe('ng-upload-file App', function() {
  let page: NgUploadFilePage;

  beforeEach(() => {
    page = new NgUploadFilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
