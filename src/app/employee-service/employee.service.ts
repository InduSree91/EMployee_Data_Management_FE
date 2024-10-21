import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient){}

    createEmployee(employee: any): Observable<any>{
        return this.http.post<any>('http://localhost:7071/api/employee/createEmployee', employee);
    }

    updateEmployee(id: string, employee: any): Observable<any>{
        return this.http.put<any>(`http://localhost:7071/api/employee/updateEmployee/${id}`, employee);
    }

    getAllEMployees(): Observable<any>{
        return this.http.get<any>('http://localhost:7071/api/employee/getAllEmployees');
    }

    getEmployeeByID(id: string): Observable<any>{
        return this.http.get<any>(`http://localhost:7071/api/employee/getEmployeeById/${id}`);
    }

    deleteEmployeeByID(id: string): Observable<any>{
        return this.http.delete<any>(`http://localhost:7071/api/employee/deleteEmployeeById/${id}`);
    }
}
