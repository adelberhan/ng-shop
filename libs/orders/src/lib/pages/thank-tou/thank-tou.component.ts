import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/order.service';
import { LocalStorageService } from '../../../../../users/src/lib/services/localstorge.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-shop-thank-tou',
  templateUrl: './thank-tou.component.html',
  styles: [],
})
export class ThankTouComponent implements OnInit {
  constructor(
    private ordersService: OrdersService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    localStorage.removeItem('orderItems');
    this.cartService.emptyCart();
    const orderData = this.ordersService.getCashedOrderData();
    this.redirect();
  }

  redirect() {
    setInterval(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }
}
