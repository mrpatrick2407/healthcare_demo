package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "credentials")
public class Signup {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String email;
	public String password;
	public String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return password;
	}

	public void setPwd(String pwd) {
		this.password = pwd;
	}

}
