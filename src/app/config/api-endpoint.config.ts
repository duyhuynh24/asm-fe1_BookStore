import { environment } from "../../environments/environment";

export const API_BASE_URL = environment.apiUrl;

export const API_ENDPOINT = {
  user: {
    base: API_BASE_URL + '/users',
    list: '',
    add: '/add',
    update: '/update',
    delete: '/delete',
    detail: '/detail',
  }
};
