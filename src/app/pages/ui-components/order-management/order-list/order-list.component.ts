import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  orders = [
    { id: 1, customer: 'Nguyễn văn Cam', bookTitle: 'Lập trình Angular', quantity: 1, total: 15000, status: 'Chờ xác nhận' },
    { id: 2, customer: 'Trần Văn Bưởi', bookTitle: 'ReactJS từ cơ bản', quantity: 2, total: 30000, status: 'Đang giao' },
    { id: 3, customer: 'Lê Văn Ổi', bookTitle: 'ReactJS từ cơ bản', quantity: 3, total: 45000, status: 'Đang giao' },
    { id: 4, customer: 'Trần Thị Xoài ', bookTitle: 'ReactJS từ cơ bản', quantity: 4, total: 60000, status: 'Đang giao' },
    { id: 5, customer: 'Nguyễn Thị Đủ', bookTitle: 'ReactJS từ cơ bản', quantity: 2, total: 300000, status: 'Đang giao' },
  ];
  statusList = ['Chờ xác nhận', 'Đang giao', 'Hoàn thành', 'Đã hủy'];

  updateStatus(order: any) {
    console.log(`Cập nhật trạng thái đơn hàng: ${order.id} -> ${order.status}`);
  }

  cancelOrder(order: any) {
    order.status = 'Đã hủy';
    console.log(`Đơn hàng ${order.id} đã bị hủy`);
  }
}
