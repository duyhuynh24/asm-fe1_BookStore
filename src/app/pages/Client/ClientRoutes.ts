
import { Routes } from '@angular/router';
import {ClientLayoutsComponent} from "../../layouts/client-layouts/client-layouts.component";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {PostsComponent} from "../ui-components/Posts/posts/posts.component";
import {ContactComponent} from "./contact/contact.component";
import {PostComponent} from "./post/post.component";
import {CartsComponent} from "./carts/carts.component";
import {LoginComponent} from "./auths/login/login.component";
import {RegisterComponent} from "./auths/register/register.component";
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
      {
        path: 'cart',
        component: CartsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      // ... các route khác cho client
    ]
  }
];
