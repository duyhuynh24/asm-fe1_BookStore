import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.scss']
})
export class EditPostsComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),

    content: new FormControl('', [
      Validators.required
    ]),

    image: new FormControl('', [
      Validators.required
    ]),

    category: new FormControl('', [
      Validators.required
    ]),


  })

  postId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;


    // Giả lập dữ liệu bài viết đang sửa
    const fakePost = {
      title: '',
      content: '',
      image: '',
      category: ''
    };

    this.postForm.patchValue(fakePost);
  }

  onSubmit() {
    console.log('Dữ liệu sau khi sửa:', this.postForm.value);
    alert('Đã lưu thay đổi!');
  }

  get title() {
    return this.postForm.get('title');
  }

  get content() {
    return this.postForm.get('content');
  }

  get image() {
    return this.postForm.get('image');
  }

  get category() {
    return this.postForm.get('category');
  }
}
