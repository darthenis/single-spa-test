import { Component, inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Page, pageState } from 'shared/page';
import { storeState } from 'shared/store';
import { userState } from 'shared/user';
@Component({
  selector: 'login-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{


  fb = inject(FormBuilder);
  ngZone = inject(NgZone)

  storeGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
  });

  userGroup = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  })

  page! : Page;
  
  subcription! : Subscription;
  
  ngOnInit(): void {
    this.subcription = pageState.page().subscribe(page => this.ngZone.runTask(() => this.page = page))
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  submit() {
    
    this.ngZone.runTask(() =>{
      if(this.page === "STORE"){
        if (this.storeGroup.invalid) return;
        const { name, price } = this.storeGroup.value;
        storeState.add(name!, price!);
        this.storeGroup.setValue({name: "", price: ""})
      } else {
        if (this.userGroup.invalid) return;
        const { name, email, password } = this.userGroup.value;
        userState.add(name!, email!, password!);
        this.userGroup.setValue({name: "", email: "", password: ""})
      }
    
    })

  }

}
