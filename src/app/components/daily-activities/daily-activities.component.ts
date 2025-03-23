import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface BookTransaction {
  id: number;
  iconColor: string;
  icon: string;
  bookTitle: string;
  customerName: string;
  saleDate: Date;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-daily-activities',
  imports: [MaterialModule, TablerIconsModule, CommonModule], // Thêm CommonModule vào imports
  templateUrl: './daily-activities.component.html',
})
export class AppDailyActivitiesComponent {
  transactions: BookTransaction[] = [
    {
      id: 1,
      iconColor: 'primary',
      icon: 'book',
      bookTitle: 'Đắc Nhân Tâm',
      customerName: 'Nguyễn Văn A',
      saleDate: new Date(2023, 10, 15, 10, 30),
      amount: 150000,
      status: 'success',
    },
    {
      id: 2,
      iconColor: 'success',
      icon: 'book',
      bookTitle: 'Harry Potter và Hòn đá Phù thủy',
      customerName: 'Trần Thị B',
      saleDate: new Date(2023, 10, 16, 14, 45),
      amount: 500000,
      status: 'success',
    },
    {
      id: 3,
      iconColor: 'error',
      icon: 'book',
      bookTitle: 'Lập trình Java cơ bản',
      customerName: 'Lê Hoàng C',
      saleDate: new Date(2023, 10, 17, 9, 15),
      amount: 300000,
      status: 'error',
    },
    {
      id: 4,
      iconColor: 'warning',
      icon: 'book',
      bookTitle: 'Nhà giả kim',
      customerName: 'Phạm Thu D',
      saleDate: new Date(2023, 10, 18, 16, 0),
      amount: 540000,
      status: 'success',
    },
  ];
}
