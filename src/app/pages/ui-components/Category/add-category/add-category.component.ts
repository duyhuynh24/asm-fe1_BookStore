import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/apis/category.service';
import { ICategory } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  category: ICategory = {
    id: 0,
    name: '',
    description: ''
  };
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  onSubmit() {
    if (!this.category.name.trim()) {
      this.errorMessage = 'Vui lòng nhập tên danh mục';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Log dữ liệu trước khi gửi
    console.log('Sending category data:', this.category);

    this.categoryService.addCategory(this.category).subscribe({
      next: (response) => {
        console.log('Success response:', response);
        this.successMessage = 'Thêm danh mục thành công';
        this.isLoading = false;
        // Reset form
        this.category = {
          id: 0,
          name: '',
          description: ''
        };
        // Chuyển về trang danh sách sau 1 giây
        setTimeout(() => {
          this.router.navigate(['/ui-components/category']);
        }, 1000);
      },
      error: (error) => {
        console.error('Error details:', {
          status: error.status,
          message: error.message,
          error: error.error
        });
        this.errorMessage = error.error?.message || 'Có lỗi xảy ra khi thêm danh mục';
        this.isLoading = false;
      }
    });
  }

  // Quay lại trang danh sách
  onCancel() {
    this.router.navigate(['/ui-components/category']);
  }
}
