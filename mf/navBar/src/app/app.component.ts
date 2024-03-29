import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Page } from './interfaces/page.enum';
import { pageState } from 'shared/page';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'navBar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.pageControl.valueChanges.subscribe((value) => {
      pageState.switchPage(value!)
    })
  }

  pageControl = new FormControl<Page>(Page.STORE, [Validators.required])


  navigate(url: string) {
    navigateToUrl(url);
  }
}
