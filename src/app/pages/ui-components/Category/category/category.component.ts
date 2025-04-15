import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CategoryService } from 'src/app/services/apis/category.service';
import { ICategory } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-category',
  standalone: true, // Make sure it's standalone if you're importing modules directly
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {
    console.log('[CategoryComponent] Constructor initialized');
  }

  ngOnInit(): void {
    console.log('[CategoryComponent] ngOnInit called');
    this.loadCategories();
  }

  // Load danh sách categories từ API
  loadCategories(): void {
    console.log('[CategoryComponent] Starting to load categories...');
    this.isLoading = true;
    this.errorMessage = '';

    this.categoryService.getCategories().subscribe({
      next: (data) => {
        console.log('[CategoryComponent] Raw response:', data);
        if (Array.isArray(data)) {
          console.log('[CategoryComponent] Data is an array with length:', data.length);
          this.categories = data;
        } else {
          console.error('[CategoryComponent] Data is not an array:', typeof data);
          this.categories = [];
          this.errorMessage = 'Dữ liệu không đúng định dạng';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('[CategoryComponent] Error loading categories:', error);
        console.error('[CategoryComponent] Error details:', {
          status: error.status,
          statusText: error.statusText,
          message: error.message,
          error: error.error
        });
        this.errorMessage = 'Có lỗi xảy ra khi tải danh sách danh mục: ' + (error.error?.message || error.message || 'Unknown error');
        this.isLoading = false;
      },
      complete: () => {
        console.log('[CategoryComponent] Categories loading completed');
        console.log('[CategoryComponent] Final categories state:', this.categories);
      }
    });
  }

  // Xử lý xóa category
  onDeleteCategory(id: number): void {
    if (!id) {
      console.error('Invalid category ID');
      return;
    }

    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa danh mục này không?');

    if (confirmDelete) {
      console.log('Deleting category with ID:', id);
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          console.log('Category deleted successfully');
          this.categories = this.categories.filter(category => category.id !== id);
          alert('Xóa danh mục thành công!');
        },
        error: (error) => {
          console.error('Error deleting category:', error);
          alert('Có lỗi xảy ra khi xóa danh mục');
        }
      });
    }
  }
}
