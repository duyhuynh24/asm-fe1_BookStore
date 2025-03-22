import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
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
