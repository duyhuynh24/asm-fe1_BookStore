import { environment } from "../../environments/environment";

export const API_BASE_URL = environment.apiUrl;

export const API_ENDPOINT = {
  user: {
    base: API_BASE_URL + '/users',
    list: '/list',
    add: '/add',
    update: '/edit',
    delete: '/delete',
  },
  category: {
    base: API_BASE_URL + '/category',
    list: '/list',
    add: '/add',
    update: '/edit',
    delete: '/delete',
  }
};
