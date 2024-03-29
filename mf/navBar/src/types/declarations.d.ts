declare module 'shared/page'{
    import { Observable } from 'rxjs';
    enum Page {
      STORE = "STORE",
      USER = "USER",
    }
    class PageState {
      private _user;
      switchPage(page: Page): void;
      page(): Observable<Page>;
    }
    export const pageState: PageState;
  }