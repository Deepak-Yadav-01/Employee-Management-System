import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl="http://localhost:8081/api/employees";

  constructor(private httpclient:HttpClient){
  }

  getEmployeeList():Observable<Employee[]>{
        return this.httpclient.get<Employee[]>(`${this.baseUrl}`)
    }
  
  createEmp(employee:Employee):Observable<object>{
    return this.httpclient.post(`${this.baseUrl}`,employee);
  }

  getEmpById(id:number):Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmpById(id:number,employee:Employee):Observable<Employee>{
    return this.httpclient.put<Employee>(`${this.baseUrl}/${id}`,employee);

  }

  deleteEmpById(id:number):Observable<object>{
    return this.httpclient.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}
