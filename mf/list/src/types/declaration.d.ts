
declare module 'shared/store'{
  import { Observable } from 'rxjs';
  interface Item {
    name: string;
    price: string;
  }
  class StoreState {
    private _store;
    add(name: string, price: string): void;
    store(): Observable<Item[]>;
  }
  export const storeState: StoreState;
}

declare module 'shared/user'{
  import { Observable } from 'rxjs';
  interface User {
    name: string;
    email: string;
    password: string;
  }
  class UserState {
    private _user;
    add(name: string, email: string, password: string): void;
    user(): Observable<User[]>;
  }
  export const userState: UserState;
}

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