package com.example.fullStack.CRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fullStack.CRUD.entity.Employee;


@Repository
public interface EmployeeRespository extends JpaRepository<Employee, Integer>{

}
