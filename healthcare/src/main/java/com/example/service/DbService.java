package com.example.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.entity.Appointment;
import com.example.entity.AppointmentDTO;
import com.example.entity.Signup;
import com.example.entity.Test;
import com.example.healthcare.AppointmentRepository;
import com.example.healthcare.SignUpRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class DbService {

	@Autowired(required = true)
	private SignUpRepository repo;
@Autowired(required=true)
private AppointmentRepository apprepo;
	public void signup(Signup signup) {
		try {
			repo.save(signup);
			System.out.println("Success");
		} catch (Exception e) {
			e.printStackTrace(); // Print the full exception stack trace for debugging
		}
	}

	
	public void save(Appointment app) {
		System.out.println(app.toString());
		AppointmentDTO dto=new AppointmentDTO(app.getId(),
	            app.getName(),
	            app.getEmail(),
	            app.getPhoneNumber(),
	            app.getAppointmentDate(),
	            app.getDob(),
	            app.getGender(),
	            app.getConsultedDoctor(),
	            app.getPreviousCondition(),
	            app.getAddress().toString(),
	            app.getReason());
		System.out.println(dto.toString());
		try {
			this.apprepo.save(dto);
		}
		catch(Exception e ) {
			System.out.println("error!"+e.getMessage());
		}
		
	}
	public int getLoginStatus(String email,String password) {
		int count;
		repo.findByEmail(email).forEach(e->System.out.println(e.getEmail()+" "+e.getPwd()));
		
		Optional<Signup> res= repo.findByEmail(email).stream().filter(e-> e.getEmail().equals(email)).findFirst();
		if(res.isPresent()) {
			Signup signup=res.get();
			if(signup.getPwd().equals(password)) {
				count=1;
			}else {
				count=2;
			}
		}else {
			count=3;
		}
		return count;
	}
	

}
