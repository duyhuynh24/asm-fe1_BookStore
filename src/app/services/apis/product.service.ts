import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService {

  constructor(
    private _http: HttpClient,
  ) {
    super(_http);
  }

  // Lấy danh sách sản phẩm
  getListProduct(): Observable<IProduct[]> {
    return this.get<IProduct[]>(API_ENDPOINT.product.base + API_ENDPOINT.product.list);
  }

  // Thêm sản phẩm mới
  addProduct(data: IProduct): Observable<IProduct> {
    return this.post<IProduct>(API_ENDPOINT.product.base + API_ENDPOINT.product.add, data);
  }

  // Sửa sản phẩm theo ID
  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.put<IProduct>(`${API_ENDPOINT.product.base}/${id}`, product);
  }

  // Xóa sản phẩm theo ID
  deleteProduct(id: number): Observable<any> {
    return this.delete(`${API_ENDPOINT.product.base}/${id}`);
  }
}
