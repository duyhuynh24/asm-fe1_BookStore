import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-category',
  standalone: true, // Make sure it's standalone if you're importing modules directly
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent { // Or ListCategoryComponent if you chose Option A
  categories = [
    { id: 1, name: 'Công Nghệ', description: 'Các sản phẩm công nghệ' },
    { id: 2, name: 'Thời Trang', description: 'Trang phục và phụ kiện' },
    { id: 3, name: 'Đồ Gia Dụng', description: 'Đồ dùng trong gia đình' }
  ];

  constructor(private router: Router) {}

  // Hàm xử lý xóa danh mục
  onDeleteCategory(id: number) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa danh mục này không?');

    if (confirmDelete) {
      this.categories = this.categories.filter(category => category.id !== id);
      alert('Xóa danh mục thành công!');
    }
  }
}
