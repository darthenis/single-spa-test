import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userState } from 'store/module';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'login-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fb = inject(FormBuilder);

  storeGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
  });

  submit() {
    if (this.storeGroup.invalid) return;
    const { name, price } = this.storeGroup.value;
    userState.login(name!, price!);
  }

  navigate(url: string) {
    navigateToUrl(url);
  }
}