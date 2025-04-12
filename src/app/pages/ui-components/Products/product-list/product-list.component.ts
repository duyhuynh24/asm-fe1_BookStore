import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
  category: string;
  description: string;
  quantity: number;
}

const PRODUCT_DATA: productsData[] = [
  { id: 1, imagePath: 'assets/images/products/conan.jpg', uname: 'Conan', budget: 18000, priority: 'confirmed', category: 'Trinh Thám', description: 'Thám tử lừng danh Conan', quantity: 10 },
  { id: 2, imagePath: 'assets/images/products/one.jpg', uname: 'One Piece', budget: 19000, priority: 'confirmed', category: 'Phiêu Lưu', description: 'Cuộc hành trình tìm kiếm kho báu One Piece', quantity: 15 },
  { id: 3, imagePath: 'assets/images/products/that.jpg', uname: 'Thất Hình Đại Tội', budget: 12000, priority: 'confirmed', category: 'Khoa Học Viễn Tưởng', description: 'Cuộc chiến giữa các tội nhân huyền thoại', quantity: 8 },
  { id: 4, imagePath: 'assets/images/products/Na.jpg', uname: 'Naruto', budget: 16000, priority: 'confirmed', category: 'Phiêu Lưu', description: 'Hành trình của Naruto trở thành Hokage', quantity: 12 },
  { id: 5, imagePath: 'assets/images/products/7v.jpg', uname: '7 Viên Ngọc Rồng', budget: 20000, priority: 'confirmed', category: 'Phiêu Lưu', description: 'Cuộc chiến giữa các chiến binh Saiyan', quantity: 20 }
];

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements AfterViewInit {
  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'category', 'description', 'quantity', 'budget'];
  dataSource1 = new MatTableDataSource<productsData>(PRODUCT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
  }

  filterValue: string = '';

  filter() {
    this.dataSource1.filter = this.filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource1.filterPredicate = (data: productsData, filter: string) => {
      return data.uname.toLowerCase().includes(filter);
    };
  }
}
