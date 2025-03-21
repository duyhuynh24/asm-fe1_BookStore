import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Thêm FormsModule để hỗ trợ ngModel

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Thêm FormsModule vào imports
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@example.com', role: 'Admin' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@example.com', role: 'User' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@example.com', role: 'User' },
  ];

  selectedUser = this.users[0]; // ✅ Mặc định chọn user đầu tiên

  onUserChange() {
    // ✅ Khi thay đổi người dùng, cập nhật selectedUser
    this.selectedUser = { ...this.selectedUser };
  }
}
