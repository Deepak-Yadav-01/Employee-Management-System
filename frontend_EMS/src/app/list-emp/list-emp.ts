import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emp',
  standalone: false,
  templateUrl: './list-emp.html',
  styleUrl: './list-emp.css'
})
export class ListEmp {

  employees:Employee[]=[  ];


  constructor(private employeeService:EmployeeService,private route:Router){  }

  ngOnInit():void{
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;      
    })
  }
  
   updateEmp(id:number){
    this.route.navigate(['update-emp',id]);
  }

  deleteEmp(id:number){
    this.employeeService.deleteEmpById(id).subscribe(data=>{
      console.log(data);
      this.getEmployee();
    })
  }

  viewEmp(id:number){
    this.route.navigate(['view-emp',id]);

  }
}
