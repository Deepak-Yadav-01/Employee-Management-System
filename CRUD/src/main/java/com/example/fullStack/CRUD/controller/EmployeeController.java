package com.example.fullStack.CRUD.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.fullStack.CRUD.entity.Employee;
import com.example.fullStack.CRUD.repository.EmployeeRespository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api")  // ✅ base path added
public class EmployeeController {

    @Autowired
    private EmployeeRespository er;

    @GetMapping("/employees")
    public List<Employee> getAllEmp() {
        return er.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmp(@RequestBody Employee emp) {
        return er.save(emp);
    }
    
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
    	Employee emp= er.findById(id).orElseThrow();
    	
    	return ResponseEntity.ok(emp);
    }
    
    
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable int id,@RequestBody Employee emp) {
    	Employee emp1= er.findById(id).orElseThrow();
    	
    	emp1.setFirstName(emp.getFirstName());
    	emp1.setLastName(emp.getLastName());
    	emp1.setSalary(emp.getSalary());

    	er.save(emp1);
    	
    	return ResponseEntity.ok(emp1);
    }
    
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmp(@PathVariable int id){
    	Employee emp1= er.findById(id).orElseThrow();
    	er.delete(emp1);
    	Map<String,Boolean>response=new HashMap<>();
    	response.put("delete",Boolean.TRUE);
    	return ResponseEntity.ok(response);

    }
}