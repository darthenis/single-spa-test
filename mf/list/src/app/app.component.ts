import { Component, NgZone, OnInit } from '@angular/core';
import { userState, Item } from 'store/module';
import { navigateToUrl } from 'single-spa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  storeItems = new Observable<Item[]>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {

      this.ngZone.runTask(() => {
        this.storeItems = userState.store();
      });

  }

  navigate(url: string) {
    navigateToUrl(url);
  }
}
