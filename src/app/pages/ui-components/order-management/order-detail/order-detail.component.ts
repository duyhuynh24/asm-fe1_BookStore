import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './order-detail.component.html',
})
export class OrderDetailComponent implements OnInit {
  orderId!: number;
  order: any;

  orders = [
    { id: 1, customer: 'Nguyễn Văn A', bookTitle: 'Lập trình Angular', quantity: 2, total: 300000, status: 'Chờ xác nhận' },
    { id: 2, customer: 'Trần Thị B', bookTitle: 'Thiết kế UI/UX', quantity: 1, total: 200000, status: 'Đang giao' },
    { id: 3, customer: 'Lê Hoàng C', bookTitle: 'Python cơ bản', quantity: 3, total: 450000, status: 'Hoàn thành' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));
    this.order = this.orders.find(o => o.id === this.orderId);
  }

  confirmOrder() {
    if (this.order) {
      this.order.status = 'Đang giao';
      console.log(`Đơn hàng #${this.order.id} đã được xác nhận!`);
    }
  }

  cancelOrder() {
    if (this.order) {
      this.order.status = 'Đã hủy';
      console.log(`Đơn hàng #${this.order.id} đã bị hủy!`);
    }
  }
}
