package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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

	@Id
    @Column(name = "user_id")
	public String userid;

	@Column(name = "feedback")
	private String feedback;

	public WaterModel() {
	}

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

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public WaterModel(String waterPressure, String waterDesc, String city, String location, String userid,
			String feedback) {
		this.waterPressure = waterPressure;
		this.waterDesc = waterDesc;
		this.city = city;
		this.location = location;
		this.userid = userid;
		this.feedback = feedback;
	}

	
}
