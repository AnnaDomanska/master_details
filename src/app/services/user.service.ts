import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { Api2Response } from './api2.response';
import { UserResponse } from './user.response';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserModel[]> {
    return this._httpClient.get<Api2Response<UserResponse[]>>(`https://dummyjson.com/users`).pipe(
      map((response: Api2Response<UserResponse[]>) => {
        return response.users.map((userResponse: UserResponse) => {
          return {
            id: userResponse.id,
            age: userResponse.age,
            lastName: userResponse.lastName,
            firstName: userResponse.firstName,
            email: userResponse.email,
            gender: userResponse.gender
          }
        });
      })
    );
  }

  getOne(id: string): Observable<UserModel> {
    return this._httpClient.get<UserModel>(`https://dummyjson.com/users/${id}`);
  }
}
