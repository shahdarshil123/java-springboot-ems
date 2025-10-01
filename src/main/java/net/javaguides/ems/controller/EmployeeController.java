package net.javaguides.ems.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.service.EmployeeService;
//import net.javaguides.ems.service.impl.EmployeeServiceImpl;

@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {
		
	private final EmployeeService employeeService;

    // Spring will inject EmployeeService here
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
	
	//Build Employee REST API
	@PostMapping
	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
		EmployeeDto savedEmployeeDto = employeeService.createEmployee(employeeDto);
		return new ResponseEntity<EmployeeDto>(savedEmployeeDto, HttpStatus.CREATED);
	}
}
