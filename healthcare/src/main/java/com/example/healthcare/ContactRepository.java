package com.example.healthcare;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.Contact;
import com.example.entity.Signup;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {
	// You can add custom query methods here if needed
	
	
}
