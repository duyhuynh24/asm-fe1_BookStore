import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  public postForm: FormGroup; // 🟢 Đảm bảo là `public`

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      image: [''],
      category: ['', Validators.required],
    });
  }

  // 🟢 Getter phải là `public`
  public get titleControl() {
    return this.postForm.controls['title'];
  }

  public get contentControl() {
    return this.postForm.controls['content'];
  }

  public get categoryControl() {
    return this.postForm.controls['category'];
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Bài viết:', this.postForm.value);
      alert('Bài viết đã được gửi!');
      this.postForm.reset();
    }
  }
}
