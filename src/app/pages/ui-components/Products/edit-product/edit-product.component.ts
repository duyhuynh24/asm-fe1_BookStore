import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class EditProductComponent {
  productName: string = '';
  productDescription: string = '';
  productPrice: number | null = null;
  productCategory: string = '';
  productStatus: string = '';
  imagePreview: string = 'assets/images/products/default.jpg';
  imageFile: File | null = null;

  errors = {
    productName: '',
    productDescription: '',
    productPrice: '',
    productCategory: '',
    productStatus: '',
    imageFile: ''
  };

  previewImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  validateForm(): boolean {
    let isValid = true;

    // Kiểm tra hình ảnh
    if (!this.imageFile) {
      this.errors.imageFile = 'Vui lòng chọn hình ảnh';
      isValid = false;
    } else {
      this.errors.imageFile = '';
    }

    // Kiểm tra tên sản phẩm
    if (!this.productName.trim()) {
      this.errors.productName = 'Tên không được để trống';
      isValid = false;
    } else {
      this.errors.productName = '';
    }

    // Kiểm tra mô tả sản phẩm
    if (!this.productDescription.trim()) {
      this.errors.productDescription = 'Mô tả không được để trống';
      isValid = false;
    } else {
      this.errors.productDescription = '';
    }

    // Kiểm tra giá
    if (this.productPrice === null || this.productPrice === undefined || isNaN(this.productPrice)) {
      this.errors.productPrice = 'Vui lòng nhập giá';
      isValid = false;
    } else if (this.productPrice <= 0) {
      this.errors.productPrice = 'Giá phải lớn hơn 0';
      isValid = false;
    } else {
      this.errors.productPrice = '';
    }

    // Kiểm tra thể loại
    if (!this.productCategory) {
      this.errors.productCategory = 'Vui lòng chọn thể loại';
      isValid = false;
    } else {
      this.errors.productCategory = '';
    }

    // Kiểm tra trạng thái
    if (!this.productStatus) {
      this.errors.productStatus = 'Vui lòng chọn trạng thái';
      isValid = false;
    } else {
      this.errors.productStatus = '';
    }

    return isValid;
  }

  saveChanges() {
    if (this.validateForm()) {
      console.log('Dữ liệu hợp lệ:', {
        name: this.productName,
        description: this.productDescription,
        price: this.productPrice,
        category: this.productCategory,
        status: this.productStatus,
        image: this.imageFile ? this.imageFile.name : '',
      });
    } else {
      console.log('Form có lỗi:', this.errors);
    }
  }
}