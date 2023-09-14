package com.example.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "appointment")
public class AppointmentDTO {
	@Override
	public String toString() {
		return "AppointmentDTO [id=" + id + ", name=" + name + ", email=" + email + ", phoneNumber=" + phoneNumber
				+ ", appointmentDate=" + appointmentDate + ", dob=" + dob + ", gender=" + gender + ", consultedDoctor="
				+ consultedDoctor + ", previousCondition=" + previousCondition + ", address=" + address + ", reason="
				+ reason + "]";
	}
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	public int id;
	public String name;
	public String email;
	public String phoneNumber;
	public Date appointmentDate;
	public Date dob;
	public AppointmentDTO() {
		
	}
	public AppointmentDTO(int id, String name, String email, String phoneNumber, Date appointmentDate, Date dob,
			String gender, String consultedDoctor, String previousCondition, String address, String reason) {
	
		this.id = id;
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.appointmentDate = appointmentDate;
		this.dob = dob;
		this.gender = gender;
		this.consultedDoctor = consultedDoctor;
		this.previousCondition = previousCondition;
		this.address = address;
		this.reason = reason;
	}
	public String gender;
	public String consultedDoctor;
	public String previousCondition;
	public String address;
	public String reason;
	
	
}
