
import { Routes } from '@angular/router';
import {ClientLayoutsComponent} from "../../layouts/client-layouts/client-layouts.component";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {PostsComponent} from "../ui-components/Posts/posts/posts.component";
import {ContactComponent} from "./contact/contact.component";
import {PostComponent} from "./post/post.component";
// ... import các component khác nếu có

export const ClientRoutes: Routes = [
  {
    path: '',
    component: ClientLayoutsComponent, // layout dành cho client (nếu có)
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: 'contacts',
        component: ContactComponent
      },
      // ... các route khác cho client
    ]
  }
];
