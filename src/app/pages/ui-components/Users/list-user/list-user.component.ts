import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-user',
  standalone: true, // Nếu dùng Standalone Component
  imports: [CommonModule, RouterModule], // ✅ Thêm CommonModule để hỗ trợ *ngFor
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  // 🛠️ Danh sách người dùng mẫu
  users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@example.com', role: 'Admin' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@example.com', role: 'User' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@example.com', role: 'User' },
  ];
}
