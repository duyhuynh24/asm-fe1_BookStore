import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Thêm RouterModule
@Component({
  selector: 'app-add-posts',
  imports: [CommonModule, RouterModule], // Thêm cả 2 module vào đây
  templateUrl: './add-posts.component.html',
  styleUrl: './add-posts.component.scss'
})
export class AddPostsComponent {
  posts = [
    { id: 1, title: 'Hướng dẫn Angular', category: 'Công nghệ' },
    { id: 2, title: 'Tư duy sáng tạo', category: 'Đời sống' },
    { id: 3, title: 'Chiến lược kinh doanh', category: 'Kinh doanh' }
  ];

  deletePost(postId: number) {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
      this.posts = this.posts.filter(post => post.id !== postId);
    }
  }
}
