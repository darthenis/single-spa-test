import { Component, NgZone, OnInit } from '@angular/core';
import { userState, Item } from 'store/module';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  storeItems: Item[] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    userState.store().subscribe((res) => {
      this.ngZone.runTask(() => {
        this.storeItems = [...res];
      });
    });
  }

  navigate(url: string) {
    navigateToUrl(url);
  }
}
