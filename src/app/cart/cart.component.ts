import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class ResumeApplication implements OnInit {
  items;
  checkoutForm;
  

  onSubmit() {
    window.alert('Your resume application has been submitted!')
  }
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,)
    {this.items = this.cartService.getItems();
    this.submitForm = this.formBuilder.group({
      name: '',
      address: ''
      });
    }

    // onSubmit(customerData) {
    // // Process checkout data here
    // console.warn('Your order has been submitted', customerData);

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
    // }
    
  ngOnInit() {
  }

}