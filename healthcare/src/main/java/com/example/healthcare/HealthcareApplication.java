package com.example.healthcare;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import com.example.entity.Test;

import com.example.service.DbService;


@ComponentScan(basePackages = {"com.example.service", "com.example.repository","com.example.controller"})
@EntityScan("com.example.entity")
@SpringBootApplication
public class HealthcareApplication {
	 @Autowired
	    private DbService testService;
	public static void main(String[] args) {
		ConfigurableApplicationContext context=SpringApplication.run(HealthcareApplication.class, args);
		HealthcareApplication hc= context.getBean(HealthcareApplication.class);
		
	}
	
}
