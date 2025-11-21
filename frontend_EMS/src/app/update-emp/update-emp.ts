import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-emp',
  standalone: false,
  templateUrl: './update-emp.html',
  styleUrl: './update-emp.css'
})
export class UpdateEmp {


  id:number=0;
  employee: Employee = new Employee();
  constructor(private empService:EmployeeService,private route:ActivatedRoute){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    
    this.empService.getEmpById(this.id).subscribe(data=>{

      this.employee=data;

    })
  }

  onSubmit(){
    this.empService.updateEmpById(this.id,this.employee).subscribe(data=>{
      this.employee=data;
      alert("your data is updated");
    })
  }
}
