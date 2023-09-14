package com.example.healthcare;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.Appointment;
import com.example.entity.AppointmentDTO;
import com.example.entity.Signup;
import com.example.entity.Test;

@Repository
public interface SignUpRepository extends JpaRepository<Signup, Integer> {
	// You can add custom query methods here if needed
	@Query(value = "Select * from credentials c where c.email = :email ", nativeQuery = true)
	List<Signup> findByEmail(String email);
	
}


