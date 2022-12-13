import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(`/api/v1/employees`).pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            id: employeeResponse.id,
            age: employeeResponse.employee_age,
            salary: employeeResponse.employee_salary,
            image: employeeResponse.profile_image
          }
        });
      })
    )
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<EmployeeModel>(`/api/v1/employee/${id}`);
  }

  ;

}
