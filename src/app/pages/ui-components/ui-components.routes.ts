import { Routes } from '@angular/router';

// ui
import { ListUserComponent } from './Users/list-user/list-user.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';

import { AppListsComponent } from './lists/lists.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { CategoryComponent } from './Category/category/category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { EditCategoryComponent } from './Category/edit-category/edit-category.component';


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        component: ListUserComponent,
      },
      {
        path: 'users/add',
        component: AddUserComponent,
      },
      {
        path: 'users/edit/:id',
        component: EditUserComponent,
      },
      
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'category/edit/:id', // Định nghĩa route nhận ID danh mục
        component: EditCategoryComponent,
      }
    ],
  },
];

