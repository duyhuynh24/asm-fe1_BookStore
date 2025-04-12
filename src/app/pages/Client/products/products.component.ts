import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  books = [
    {
      title: 'Dám bị ghét',
      description: 'Cuốn sách truyền cảm hứng từ Nhật Bản.',
      price: 89000
    },
    {
      title: 'Nhà giả kim',
      description: 'Cuốn tiểu thuyết nổi tiếng của Paulo Coelho.',
      price: 115000
    },
    {
      title: 'Tư duy nhanh và chậm',
      description: 'Phân tích tâm lý học hành vi.',
      price: 199000
    },
    // thêm nhiều sách nếu muốn
  ];
}
