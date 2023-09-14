package com.example.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="appointment")
public class Appointment {
	
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getEmail() {
		return email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public Date getAppointmentDate() {
		return appointmentDate;
	}
	public Date getDob() {
		return dob;
	}
	public String getGender() {
		return gender;
	}
	public String getConsultedDoctor() {
		return consultedDoctor;
	}
	public String getPreviousCondition() {
		return previousCondition;
	}
	public Address getAddress() {
		return address;
	}
	public String getReason() {
		return reason;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	public int id;
	public String name;
	public String email;
	@Override
	public String toString() {
		return "Appointment [id=" + id + ", name=" + name + ", email=" + email + ", phoneNumber=" + phoneNumber
				+ ", appointmentDate=" + appointmentDate + ", dob=" + dob + ", gender=" + gender + ", consultedDoctor="
				+ consultedDoctor + ", previousCondition=" + previousCondition + ", address=" + address + ", reason="
				+ reason + "]";
	}
	public String phoneNumber;
	public Date appointmentDate;
	public Date dob;
	public String gender;
	public String consultedDoctor;
	public String previousCondition;
	public Address address;
	public String reason;
	
	
}

