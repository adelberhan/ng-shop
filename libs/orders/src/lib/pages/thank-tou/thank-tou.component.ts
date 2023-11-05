import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/order.service';
import { LocalStorageService } from '../../../../../users/src/lib/services/localstorge.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'ng-shop-thank-tou',
  templateUrl: './thank-tou.component.html',
  styles: [],
})
export class ThankTouComponent implements OnInit {
  constructor(
    private ordersService: OrdersService,
    private localStorageService: LocalStorageService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    localStorage.removeItem('orderItems');
    this.cartService.emptyCart();
    const orderData = this.ordersService.getCashedOrderData();
  }
}
