declare module 'store/module' {
  import { Observable } from 'rxjs';
  interface Item {
    name: string;
    price: string;
  }
  class UserState {
    private _store;
    login(name: string, price: string): void;
    store(): Observable<Item[]>;
  }
  export const userState: UserState;
}
