import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 Import RouterModule



@Component({
  selector: 'app-category',
  imports: [CommonModule,RouterModule,],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categories = [
    { id: 1, name: 'Sách lập trình' },
    { id: 1, name: 'Sách Khoa Học' },
    { id: 2, name: 'Sách Văn Học' }
  ];

  constructor(private router: Router) {}
 

 
}
