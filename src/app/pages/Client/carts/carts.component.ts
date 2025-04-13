import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-carts',
  imports: [CommonModule,FormsModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent {
  // Dữ liệu gán cứng cho giỏ hàng (sẽ thay bằng dữ liệu từ API trong dự án thực tế)
  cartItems = [
    {
      id: 1,
      title: 'Lập Trình Angular',
      description: 'Sách hướng dẫn Angular cơ bản',
      price: 200000,
      quantity: 1,
      imageUrl: '/assets/images/book1.jpg'
    },
    {
      id: 2,
      title: 'Học Lập Trình JavaScript',
      description: 'Sách cơ bản về JavaScript',
      price: 180000,
      quantity: 2,
      imageUrl: '/assets/images/book2.jpg'
    }
  ];

  // Xóa sản phẩm khỏi giỏ hàng
  removeItem(item: any): void {
    this.cartItems = this.cartItems.filter((x) => x.id !== item.id);
  }

  // Tính tổng tiền giỏ hàng
  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
