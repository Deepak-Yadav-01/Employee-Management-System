import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-emp',
  standalone: false,
  templateUrl: './view-emp.html',
  styleUrl: './view-emp.css'
})
export class ViewEmp {

  id:number=0;
    employee: Employee = new Employee();
    constructor(private empService:EmployeeService,private route:ActivatedRoute){}
  
    ngOnInit():void{
  
      this.id=this.route.snapshot.params['id'];
      
      this.empService.getEmpById(this.id).subscribe(data=>{
  
        this.employee=data;
  
      })
    }

}
