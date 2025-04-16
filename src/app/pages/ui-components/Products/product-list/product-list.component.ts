import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { ProductService } from 'src/app/services/apis/product.service';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['product', 'price', 'stock', 'category', 'actions'];
  dataSource = new MatTableDataSource<IProduct>();
  filterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getListProduct().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data: IProduct, filter: string) =>
          data.name.toLowerCase().includes(filter);
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách sản phẩm:', err);
      }
    });
  }

  applyFilter(): void {
    const filter = this.filterValue.trim().toLowerCase();
    this.dataSource.filter = filter;
  }

  onEditProduct(id: number): void {
    this.router.navigate(['/products/edit-product', id]);
  }

  onDeleteProduct(id: number): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (confirmDelete) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(p => p.id !== id);
          this.applyFilter();
        },
        error: (err) => {
          console.error('Lỗi khi xóa sản phẩm:', err);
        }
      });
    }
  }
}
