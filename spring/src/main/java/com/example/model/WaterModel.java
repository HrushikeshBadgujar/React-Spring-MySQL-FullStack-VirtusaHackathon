package com.example.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "waterInfo")
public class WaterModel {

	@Column(name = "water_pressure")
	private String waterPressure;

	@Column(name = "water_desc")
	private String waterDesc;

	@Column(name = "city")
	private String city;

	@Column(name = "location")
	private String location;            //location means areaname

	// use values from other column for this
	@Id
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user", referencedColumnName = "user_id")
	public UserModel user;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "feedback", referencedColumnName = "feedbackId")
	public FeedbackModel feedback;


	public String getWaterPressure() {
		return waterPressure;
	}


	public void setWaterPressure(String waterPressure) {
		this.waterPressure = waterPressure;
	}


	public String getWaterDesc() {
		return waterDesc;
	}


	public void setWaterDesc(String waterDesc) {
		this.waterDesc = waterDesc;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public UserModel getUser() {
		return user;
	}


	public void setUser(UserModel user) {
		this.user = user;
	}


	public FeedbackModel getFeedback() {
		return feedback;
	}


	public void setFeedback(FeedbackModel feedback) {
		this.feedback = feedback;
	}


	public WaterModel(String waterPressure, String waterDesc, String city, String location, UserModel user,
			FeedbackModel feedback) {
		this.waterPressure = waterPressure;
		this.waterDesc = waterDesc;
		this.city = city;
		this.location = location;
		this.user = user;
		this.feedback = feedback;
	}


	public WaterModel() {
	}

	

	
	
	
}
