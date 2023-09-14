package com.example.entity;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Embeddable
public class Address{
	
	public String guestAddress;
    public String guestCity;
    public String guestState;
    public String guestCountry;
    public String guestZipCode;
	@Override
	public String toString() {
		return guestAddress + " ," + guestCity + " ," + guestState
				+ " ," + guestCountry + " ," + guestZipCode ;
	}
}
