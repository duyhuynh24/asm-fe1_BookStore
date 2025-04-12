import { Routes } from '@angular/router';
import { ClientRoutes } from './pages/Client/ClientRoutes';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/full/blank/blank.component';

export const routes: Routes = [
  // Route cho client (mặc định hiển thị client)
  {
    path: '',
    children: [
      ...ClientRoutes
    ]
  },

  // Route cho admin
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },

  // Route cho các trang authentication
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },

  // Xử lý trang lỗi hoặc redirect
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
