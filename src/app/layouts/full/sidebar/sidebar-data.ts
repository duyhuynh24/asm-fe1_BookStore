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
      // { displayName: 'Add-User', iconName: 'add', route: '/ui-components/add-user' },
      { displayName: 'List-User', iconName: 'list', route: '/ui-components/users' },
    ]
  },
  {
    displayName: 'Category',
    iconName: 'category',
    route: '/ui-components/Category',
    children: [
      { displayName: 'Lists-Category', iconName: 'list', route: '/ui-components/category' },
      { displayName: 'Add-Category', iconName: 'add', route: '/ui-components/add-category' }
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
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
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
