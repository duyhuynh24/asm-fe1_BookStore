import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,  // Nếu component này standalone
  imports: [CommonModule, ReactiveFormsModule], // Thêm ReactiveFormsModule
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: [''],
      content: [''],
      image: [''],
      category: ['']
    });
  }

  onSubmit() {
    console.log('Bài viết:', this.postForm.value);
    alert('Bài viết đã được gửi!');
    this.postForm.reset();
  }
}
