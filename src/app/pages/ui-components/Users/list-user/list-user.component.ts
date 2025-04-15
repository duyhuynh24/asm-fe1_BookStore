import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../../services/apis/user.service';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: IUser[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách user:', err);
      }
    });
  }

  onDeleteUser(userId: number): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa người dùng này?');
    if (confirmDelete) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== userId);
          console.log('Đã xóa user:', userId);
        },
        error: (err) => {
          console.error('Lỗi khi xóa user:', err);
        }
      });
    }
  }

  onEditUser(userId: number): void {
    this.router.navigate(['/users/edit', userId]);
  }
}
