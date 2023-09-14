package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Contact;
import com.example.healthcare.ContactRepository;

@Service
public class ContactService {
	@Autowired(required = true)
	private ContactRepository repo;
public void submit(Contact form) {
	this.repo.save(form);
}
}
