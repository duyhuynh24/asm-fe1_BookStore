import { Routes, } from '@angular/router';

// user
import { ListUserComponent } from './Users/list-user/list-user.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
// ui
import { AppListsComponent } from './lists/lists.component';
import { AppFormsComponent } from './forms/forms.component';

// products
import { ProductListComponent } from './Products/product-list/product-list.component';
import { AddProductComponent } from "./Products/add-product/add-product.component";
import { EditProductComponent } from './Products/edit-product/edit-product.component';
// category
import { CategoryComponent } from './Category/category/category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { EditCategoryComponent } from './Category/edit-category/edit-category.component';

// posts
import {PostsComponent} from './Posts/posts/posts.component';
import { AddPostsComponent } from './Posts/add-posts/add-posts.component';
export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-user',
        component: ListUserComponent,
      },
      {
        path: 'add-user',
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
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/add',
        component: AddProductComponent,
      },
      {
        path: 'products/edit/:id',
        component: EditProductComponent,
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
        path: 'category/edit/:id',
        component: EditCategoryComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'add-posts',
        component: AddPostsComponent,
      },
    ],
  },
];

