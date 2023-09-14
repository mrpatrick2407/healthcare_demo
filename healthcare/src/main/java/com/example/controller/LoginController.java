package com.example.controller;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Appointment;
import com.example.entity.MedicalProducts;
import com.example.entity.Signup;
import com.example.entity.Test;
import com.example.service.DbService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
	@Autowired(required = true)
	private DbService service;
	private ObjectMapper obj;
	@PostMapping(value = "/signup")
	public void credentials(@RequestBody Signup signup) {
		try {
			service.signup(signup);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public int login(@RequestBody Map<String ,String> req) {
		try {
			
			return service.getLoginStatus(req.get("email"),req.get("password"));
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return 0;
		}

	}
	@RequestMapping(value = "/appointment", method = RequestMethod.POST)
	public void saveAppointment(@RequestBody Appointment req) {
		try {
			
			this.service.save(req);
			System.out.println("Sucess");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Fail");
		}

	}
	
	
	@RequestMapping(value="/json",method = RequestMethod.GET)
	public MedicalProducts[] test() {
		obj= new ObjectMapper();
		MedicalProducts[] medical = null;
		
		try {
			medical= obj.readValue(new File("C:\\Users\\Itsus\\Downloads\\healthcare (1)\\healthcare\\src\\main\\resources\\static\\medical.json"),MedicalProducts[].class);
			 for (MedicalProducts product : medical) {
	                // Replace "image" field with a specific value (e.g., "new_image_value.jpg")
	                product.setImage("https://medlineplus.gov/images/Medicines.jpg");
	            }

			return medical;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
			
			return medical;
		}
	
	}
	
}
