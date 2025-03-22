import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Thêm RouterModule
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

// Interface cho dữ liệu sách
interface BookData {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  status: string;
}

const DU_LIEU_SACH: BookData[] = [
  { 
    id: 1, 
    imagePath: 'assets/images/products/sach-1.jpg', 
    title: 'Nhà Giả Kim', 
    description: 'Một cuốn tiểu thuyết về việc theo đuổi ước mơ và khám phá số phận.', 
    price: 350000, 
    stock: 10, 
    category: 'Tiểu thuyết', 
    status: 'Còn hàng' 
  },
  { 
    id: 2, 
    imagePath: 'assets/images/products/sach-2.jpg', 
    title: 'Thói Quen Nguyên Tử', 
    description: 'Cuốn sách về cách những thói quen nhỏ có thể dẫn đến kết quả đáng kinh ngạc.', 
    price: 450000, 
    stock: 0, 
    category: 'Phát triển bản thân', 
    status: 'Hết hàng' 
  },
  { 
    id: 3, 
    imagePath: 'assets/images/products/sach-3.jpg', 
    title: 'Làm Việc Sâu', 
    description: 'Hướng dẫn đạt được thành công trong một thế giới đầy phiền nhiễu.', 
    price: 400000, 
    stock: 5, 
    category: 'Năng suất', 
    status: 'Còn hàng' 
  },
  { 
    id: 4, 
    imagePath: 'assets/images/products/sach-4.jpg', 
    title: 'Nghệ Thuật Tinh Tế', 
    description: 'Cách tiếp cận ngược lại với việc sống một cuộc sống tốt đẹp.', 
    price: 500000, 
    stock: 8, 
    category: 'Phát triển bản thân', 
    status: 'Còn hàng' 
  }
];

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule, // ✅ Thêm RouterModule để dùng routerLink
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  displayedColumns: string[] = ['product', 'description', 'price', 'stock', 'category', 'status', 'actions'];
  dataSource = [...DU_LIEU_SACH];

  // ✅ Thêm phương thức xóa sản phẩm
  deleteProduct(id: number) {
    this.dataSource = this.dataSource.filter(product => product.id !== id);
    console.log(`Deleted product with ID: ${id}`);
  }
}
