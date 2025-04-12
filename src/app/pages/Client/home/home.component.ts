import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Nếu cần, bạn có thể khai báo data tại đây. Ví dụ sau chỉ mang tính tĩnh.
  books = [
    {
      id: 1,
      title: 'Lập Trình Angular',
      author: 'Tác giả A',
      price: '200.000₫',
      imageUrl: 'assets/images/book1.jpg'
    },
    {
      id: 2,
      title: 'Học Lập Trình JavaScript',
      author: 'Tác giả B',
      price: '180.000₫',
      imageUrl: 'assets/images/book2.jpg'
    },
    {
      id: 3,
      title: 'Thiết Kế Giao Diện Web',
      author: 'Tác giả C',
      price: '250.000₫',
      imageUrl: 'assets/images/book3.jpg'
    }
  ];
}
