import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/services/apis/category.service';
import { ICategory } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss'
})
export class EditCategoryComponent implements OnInit {
  categoryId!: number;
  category: ICategory = {
    id: 0,
    name: '',
    description: ''
  };
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));
      if (this.categoryId) {
        this.loadCategory();
      } else {
        this.errorMessage = 'ID danh mục không hợp lệ';
      }
    });
  }

  loadCategory() {
    this.isLoading = true;
    this.categoryService.getCategoryById(this.categoryId).subscribe({
      next: (data) => {
        this.category = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading category:', error);
        this.errorMessage = 'Không thể tải thông tin danh mục';
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    if (!this.category.name.trim()) {
      this.errorMessage = 'Vui lòng nhập tên danh mục';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.categoryService.updateCategory(this.categoryId, this.category).subscribe({
      next: () => {
        this.successMessage = 'Cập nhật danh mục thành công';
        this.isLoading = false;
        // Chuyển về trang danh sách sau 1 giây
        setTimeout(() => {
          this.router.navigate(['/ui-components/category']);
        }, 1000);
      },
      error: (error) => {
        console.error('Error updating category:', error);
        this.errorMessage = 'Có lỗi xảy ra khi cập nhật danh mục';
        this.isLoading = false;
      }
    });
  }

  // Quay lại trang danh sách
  onCancel() {
    this.router.navigate(['/ui-components/category']);
  }
}
