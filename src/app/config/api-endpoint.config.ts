import { environment } from "../../environments/environment";

export const API_BASE_URL = environment.apiUrl;

export const API_ENDPOINT = {
  user: {
    base: API_BASE_URL + '/users',  // URL cơ sở cho users
    list: '',
    add: '/add',
    update: '/update',
    delete: '/delete',
    detail: '/detail',
  },
  product: {
    base: API_BASE_URL + '/products',  // Sử dụng API_BASE_URL cho sản phẩm
    list: '',  // Đã có trong base URL
    add: '/add',  // Endpoint thêm sản phẩm
    update: '/update',  // Endpoint cập nhật sản phẩm
    delete: '/delete',  // Endpoint xóa sản phẩm
  }
};
