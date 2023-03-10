package com.example.demo.Controller;


import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.ReadOnlyFileSystemException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getEmployeeDetails(){
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee= employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No Employee with this Id"+id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public  ResponseEntity<Employee> updateEmployeeDetails(@PathVariable Long id, @RequestBody Employee e){
        Employee employee= employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No Employee with this"+id));
        employee.setFirstName(e.getFirstName());
        employee.setLastName(e.getLastName());
        employee.setEmailId(e.getEmailId());
        Employee updatedEmployee=employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        Employee employee= employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No Employee with this id"+id));
        employeeRepository.delete(employee);
        Map<String,Boolean> response = new HashMap<>();
        response.put("delete",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }


}
