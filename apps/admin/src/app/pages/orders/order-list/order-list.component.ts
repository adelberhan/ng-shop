import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../../../../../../libs/orders/src/lib/models/order';
import { OrdersService } from '../../../../../../../libs/orders/src/lib/services/order.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ORDER_STATUS } from '@ng-shop/status';
import { Subject, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ng-shop-order-list',
  templateUrl: './order-list.component.html',
  styles: [],
})
export class OrderListComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  endSubs$: Subject<any> = new Subject();
  authError = false;
  authMessage!: string;
  isSubmitted = false;

  orderStatus = ORDER_STATUS;
  dataRefresher: any;
  // OrdersService;
  constructor(
    private ordersService: OrdersService,
    private Router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.isSubmitted = true;
    this._getOrders();
  }
  ngOnDestroy() {
    this.endSubs$.complete();
  }

  showOrder(orderId: string) {
    this.Router.navigateByUrl(`orders/${orderId}`);
  }

  // _getOrder() {
  //   this.ordersService.getOrder().subscribe(orders => {
  //     this.orders=orders
  //   })
  // }

  // deleteOrder(orderId: string) {
  //   console.log(orderId);
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to Delete the order?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.ordersService
  //         .deleteOrder(orderId)
  //         .pipe(takeUntil(this.endSubs$))
  //         .subscribe(
  //           () => {
  //             this._getOrders();
  //             this.messageService.add({
  //               severity: 'success',
  //               summary: 'Service Message',
  //               detail: 'order is deleted?',
  //             });
  //           },
  //           () => {
  //             this.messageService.add({
  //               severity: 'error',
  //               summary: 'Error',
  //               detail: 'order is not deleted',
  //             });
  //           }
  //         );
  //     },
  //   });
  // }

  deleteOrder(orderId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Order?',
      header: 'Delete Order',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ordersService
          .deleteOrder(orderId)
          .pipe(takeUntil(this.endSubs$))
          .subscribe(
            () => {
              this._getOrders();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Order is deleted!',
              });
            },
            () => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Order is not deleted!',
              });
            }
          );
      },
    });
  }

  _getOrders() {
    this.ordersService
      .getOrders()
      .pipe(takeUntil(this.endSubs$))
      .subscribe(
        (orders) => {
          this.orders = orders;
          console.log(orders);
        },
        (error: HttpErrorResponse) => {
          this.authError = true;
          console.log(error);
          if (error.status !== 400) {
            this.authMessage = 'You are unauthorized to see this content 🙄 ';
          }
        }
      );
  }
}
