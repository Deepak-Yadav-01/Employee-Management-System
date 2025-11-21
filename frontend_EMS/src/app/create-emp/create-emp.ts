import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emp',
  standalone: false,
  templateUrl: './create-emp.html',
  styleUrl: './create-emp.css'
})
export class CreateEmp {

  employee:Employee=new Employee();

  constructor(private employeeservice:EmployeeService,private route:Router){}

  onSubmit(){
    this.insertEmployee();
    console.log(this.employee)
  }

  insertEmployee(){
    this.employeeservice.createEmp(this.employee).subscribe(data=>{
      this.goToEmployee();
      console.log(data);
    })
  }

  goToEmployee(){
    this.route.navigate(['/employees']);
  }

}
