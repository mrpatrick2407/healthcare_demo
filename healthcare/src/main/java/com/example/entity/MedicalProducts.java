package com.example.entity;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "medicals")
public class MedicalProducts {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	public int id;
	public int price;
	public String name; 
	public String image;
	public String category;
	public String description;
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
}
