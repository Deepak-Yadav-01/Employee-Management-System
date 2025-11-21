import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee } from './employee';
import { ListEmp } from './list-emp/list-emp';
import { CreateEmp } from './create-emp/create-emp';
import { UpdateEmp } from './update-emp/update-emp';
import { ViewEmp } from './view-emp/view-emp';

const routes: Routes = [

  {path:'employees',component:ListEmp},
  {path:'create-emp',component:CreateEmp},
  {path:'update-emp/:id',component:UpdateEmp},
  {path:'view-emp/:id',component:ViewEmp},
  {path:'',redirectTo:'employee',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
