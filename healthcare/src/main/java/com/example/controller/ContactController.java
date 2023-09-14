package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Contact;
import com.example.service.ContactService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ContactController {
	@Autowired(required = true)
	private ContactService ser;
	
	@PostMapping("/contact")
	public void submit(@RequestBody Contact form) {
		System.out.println(form.toString());
		this.ser.submit(form);
		
	}
}
