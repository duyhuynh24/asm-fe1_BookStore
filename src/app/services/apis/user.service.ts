import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(
    private _http: HttpClient,
  ) {
    super(_http);
  }

  // Lấy danh sách user
  getListUser(): Observable<IUser[]> {
    return this.get<IUser[]>(API_ENDPOINT.user.base + API_ENDPOINT.user.list);
  }

  // Thêm user
  addUser(data: IUser): Observable<IUser> {
    return this.post<IUser>(API_ENDPOINT.user.base + API_ENDPOINT.user.add, data);
  }

  // Sửa user theo ID
  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.put<IUser>(`${API_ENDPOINT.user.base}/${id}`, user);
  }

  // Xóa user theo ID
  deleteUser(id: number): Observable<any> {
    return this.delete(`${API_ENDPOINT.user.base}/${id}`);
  }
}
