import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/user.interface'; // Điều chỉnh đường dẫn nếu cần
import { Observable, throwError } from 'rxjs';
import { API_ENDPOINT } from 'src/app/config/api-endpoint.config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(private _http: HttpClient) {
    super(_http);
  }

  // Lấy danh sách user
  getUsers(): Observable<IUser[]> {
    return this.get<IUser[]>(API_ENDPOINT.user.base + API_ENDPOINT.user.list)
      .pipe(
        catchError(error => {
          console.error('Error fetching user list', error);
          return throwError(() => error);
        })
      );
  }

  // Lấy chi tiết 1 user theo ID (nếu cần dùng cho edit)
  getUserById(id: number): Observable<IUser> {
    return this.get<IUser>(`${API_ENDPOINT.user.base}/${id}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching user with id ${id}`, error);
          return throwError(() => error);
        })
      );
  }

  // Thêm user
  addUser(data: IUser): Observable<IUser> {
    return this.post<IUser>(API_ENDPOINT.user.base + API_ENDPOINT.user.add, data)
      .pipe(
        catchError(error => {
          console.error('Error adding user', error);
          return throwError(() => error);
        })
      );
  }

  // Sửa user theo ID
  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.put<IUser>(`${API_ENDPOINT.user.base}/${id}`, user)
      .pipe(
        catchError(error => {
          console.error('Error updating user', error);
          return throwError(() => error);
        })
      );
  }

  // Xóa user theo ID
  deleteUser(id: number): Observable<any> {
    return this.delete(`${API_ENDPOINT.user.base}/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error deleting user', error);
          return throwError(() => error);
        })
      );
  }
}
