import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICategory } from 'src/app/interfaces/category.interface';
import { Observable, throwError } from 'rxjs';
import { API_ENDPOINT } from 'src/app/config/api-endpoint.config';
import { catchError, map } from 'rxjs/operators';

interface ApiResponse<T> {
  success: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService {

  constructor(private _http: HttpClient) {
    super(_http);
  }

  // Lấy danh sách category
  getCategories(): Observable<ICategory[]> {
    return this.get<ApiResponse<ICategory[]>>(API_ENDPOINT.category.base + API_ENDPOINT.category.list)
      .pipe(
        map(response => {
          if (response && response.data) {
            return response.data.map(category => ({
              ...category,
              description: category.description || ''
            }));
          }
          console.error('Unexpected API response format:', response);
          return [];
        }),
        catchError(error => {
          console.error('Error fetching category list', error);
          return throwError(() => error);
        })
      );
  }

  // Lấy chi tiết 1 category theo ID
  getCategoryById(id: number): Observable<ICategory> {
    return this.get<ApiResponse<ICategory>>(`${API_ENDPOINT.category.base}/${id}`)
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.error(`Error fetching category with id ${id}`, error);
          return throwError(() => error);
        })
      );
  }

  // Thêm category
  addCategory(data: ICategory): Observable<ICategory> {
    // Chỉ lấy name và description, bỏ qua id
    const categoryData = {
      name: data.name.trim(),
      description: data.description || null  // Thay đổi cách xử lý description
    };

    console.log('Sending data to server:', JSON.stringify(categoryData, null, 2));

    // Sử dụng phương thức post từ ApiService với error handling chi tiết hơn
    return this.post<any>(
      API_ENDPOINT.category.base,
      categoryData
    ).pipe(
      map(response => {
        console.log('Server response:', response);
        if (response && response.data) {
          return response.data;
        }
        return response;
      }),
      catchError(error => {
        // Log chi tiết hơn về lỗi
        console.error('Error details:', {
          status: error.status,
          statusText: error.statusText,
          message: error.message,
          error: error.error,
          url: error.url,
          headers: error.headers?.keys?.() || [],
          requestData: categoryData
        });
        return throwError(() => ({
          status: error.status,
          message: error.error?.message || 'Có lỗi xảy ra khi thêm danh mục',
          error: error.error
        }));
      })
    );
  }

  // Sửa category theo ID
  updateCategory(id: number, category: ICategory): Observable<ICategory> {
    const categoryData = {
      name: category.name.trim(),
      description: category.description?.trim() || ''
    };

    return this.put<any>(
      `${API_ENDPOINT.category.base}/${id}`,
      categoryData
    ).pipe(
      map(response => {
        if (response && response.data) {
          return response.data;
        }
        return response;
      }),
      catchError(error => {
        console.error('Error updating category', error);
        return throwError(() => error);
      })
    );
  }

  // Xóa category theo ID
  deleteCategory(id: number): Observable<any> {
    return this.delete(
      `${API_ENDPOINT.category.base}/${id}`
    ).pipe(
      map((response: any) => response?.data || response),
      catchError(error => {
        console.error('Error deleting category', error);
        return throwError(() => error);
      })
    );
  }
}
