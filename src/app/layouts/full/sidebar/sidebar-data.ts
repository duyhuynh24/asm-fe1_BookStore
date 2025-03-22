import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'User',
    iconName: 'User',
    route: '/ui-components/users',
    children: [
      { displayName: 'Add', iconName: '', route: '/ui-components/add-user' },
      { displayName: 'List', iconName: '', route: '/ui-components/list-user' },
    ]
  },
  {
    displayName: 'Category',
    iconName: 'category',
    route: '/ui-components/Category',
    children: [
      { displayName: 'Lists', iconName: '', route: '/ui-components/category' },
      { displayName: 'Add', iconName: '', route: '/ui-components/add-category' }
    ]
  },
  {
    displayName: 'Lists',
    iconName: 'list-details',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Products',
    iconName: 'Table',
    route: '/ui-components/Products',
    children: [
      { displayName: 'List', iconName: '', route: '/ui-components/products' },
      { displayName: 'Add', iconName: '', route: '/ui-components/products/add'}
    ],
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
        iconName: 'point',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
        iconName: 'point',
        route: '/authentication/register',
      },
    ],
  },
];
