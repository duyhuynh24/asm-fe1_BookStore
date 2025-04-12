import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  posts = [
    {
      id: 1,
      title: 'Top 5 cuốn sách hay bạn nên đọc trong năm nay',
      image: '/assets/images/post1.jpg',
      date: '12/04/2025',
      description: 'Khám phá những cuốn sách truyền cảm hứng, bổ ích nhất được độc giả yêu thích...',
    },
    {
      id: 2,
      title: 'Lợi ích của việc đọc sách mỗi ngày',
      image: '/assets/images/post2.jpg',
      date: '10/04/2025',
      description: 'Đọc sách không chỉ giúp mở mang tri thức mà còn cải thiện tư duy và sự tập trung...',
    },
    // Thêm bài viết khác...
  ];
}
