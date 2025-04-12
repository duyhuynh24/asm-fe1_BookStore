import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserService } from '../../../../services/apis/user.service';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.forbiddenNameValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl(''),
      address: new FormControl('')
    });
  }

  ngOnInit(): void {}

  // Validator không cho phép từ cấm như admin, root
  forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
    const forbiddenWords = [/admin/i, /root/i];
    if (control.value && forbiddenWords.some(word => word.test(control.value))) {
      return { forbiddenName: 'Tên người dùng không hợp lệ' };
    }
    return null;
  }

  // Gửi form
  onSubmit() {
    if (this.userForm.valid) {
      const userData: IUser = this.userForm.value;
      this.userService.addUser(userData).subscribe({
        next: () => {
          alert('🟢 Thêm người dùng thành công!');
          this.userForm.reset();
          this.router.navigate(['/ui-components/users']); // Chuyển hướng sau khi thành công
        },
        error: (err) => {
          console.error(err);
          alert('🔴 Lỗi khi thêm người dùng!');
        }
      });
    } else {
      console.warn('❌ Form không hợp lệ');
    }
  }

  get f() {
    return this.userForm.controls;
  }
}
