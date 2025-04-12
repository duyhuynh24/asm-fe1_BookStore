import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';

export interface BookSaleData {
  customerImage: string;
  customerName: string;
  customerEmail: string;
  bookTitle: string;
  category: string;
  price: number;
  quantity: number;
  total: number;
  saleDate: Date;
}

const ELEMENT_DATA: BookSaleData[] = [
  {
    customerImage: 'assets/images/profile/user-1.jpg',
    customerName: 'Nguyễn Văn A',
    customerEmail: 'nguyenvana@example.com',
    bookTitle: 'Đắc Nhân Tâm',
    category: 'Kỹ năng sống',
    price: 150000,
    quantity: 1,
    total: 150000,
    saleDate: new Date(2023, 10, 15),
  },
  {
    customerImage: 'assets/images/profile/user-2.jpg',
    customerName: 'Trần Thị B',
    customerEmail: 'tranthib@example.com',
    bookTitle: 'Harry Potter và Hòn đá Phù thủy',
    category: 'Tiểu thuyết',
    price: 250000,
    quantity: 2,
    total: 500000,
    saleDate: new Date(2023, 10, 16),
  },
  {
    customerImage: 'assets/images/profile/user-3.jpg',
    customerName: 'Lê Hoàng C',
    customerEmail: 'lehoangc@example.com',
    bookTitle: 'Lập trình Java cơ bản',
    category: 'Công nghệ thông tin',
    price: 300000,
    quantity: 1,
    total: 300000,
    saleDate: new Date(2023, 10, 17),
  },
  {
    customerImage: 'assets/images/profile/user-4.jpg',
    customerName: 'Phạm Thu D',
    customerEmail: 'phamthud@example.com',
    bookTitle: 'Nhà giả kim',
    category: 'Tiểu thuyết',
    price: 180000,
    quantity: 3,
    total: 540000,
    saleDate: new Date(2023, 10, 18),
  },
];

@Component({
  selector: 'app-product-performance',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './product-performance.component.html',
})
export class AppProductPerformanceComponent {
  displayedColumns: string[] = [
    'customer',
    'bookTitle',
    'category',
    'price',
    'quantity',
    'total',
    'saleDate',
  ];
  dataSource = ELEMENT_DATA;
}
