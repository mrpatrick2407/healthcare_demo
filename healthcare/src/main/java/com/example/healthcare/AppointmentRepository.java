package com.example.healthcare;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.AppointmentDTO;

@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentDTO, Integer>{
	
}