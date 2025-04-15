import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/apis/user.service';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  userForm!: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.userId = Number(idParam);
      this.userService.getUserById(this.userId).subscribe({
        next: (user: IUser) => {
          this.userForm.patchValue(user);
        },
        error: (err) => console.error(err)
      });
    }
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe({
        next: () => {
          alert('Cập nhật thành công!');
          this.router.navigate(['/ui-components/users']);
        },
        error: (err) => console.error(err)
      });
    }
  }
}
