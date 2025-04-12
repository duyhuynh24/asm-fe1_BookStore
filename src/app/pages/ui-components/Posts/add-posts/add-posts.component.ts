import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent {
  formData = new FormGroup({
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

  onSubmit() {
    console.log('Bài viết:', this.formData.value);
    alert('Bài viết đã được gửi!');
    this.formData.reset();
  }

  get title() {
    return this.formData.get('title');
  }

  get content() {
    return this.formData.get('content');
  }

  get image() {
    return this.formData.get('image');
  }

  get category() {
    return this.formData.get('category');
  }
}
