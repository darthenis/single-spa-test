import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Item, storeState } from 'shared/store';
import { Subscription, mergeMap, tap } from 'rxjs';
import { Page, pageState } from 'shared/page';
import { User, userState } from 'shared/user';
import { List } from './interfaces/list.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  listItems : List[] = []

  page! : Page;

  subscription! : Subscription;

  constructor(private ngZone: NgZone) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

      this.subscription = pageState.page()
                              .pipe(
                                tap(page => this.page = page),
                                mergeMap(page => page === "STORE" ? storeState.store() : userState.user()),
                                
                              )
                              .subscribe(list => {
                                  this.ngZone.runTask(() => this.listItems = list)
                              })
  }

  isItem(): Item[]{
    return this.listItems as Item[];
  }

  isUser(): User[]{
    return this.listItems as User[];
  }

  
}
