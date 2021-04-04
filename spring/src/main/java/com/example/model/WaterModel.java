package com.example.model;

//import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "waterInfo")
public class WaterModel {

	@Column(name = "waterpres")
	private String waterpres;

	@Column(name = "waterdesc")
	private String waterdesc;

	@Column(name = "city")
	private String city;

	@Column(name = "location")
	private String location;            //location means areaname

	@Id
    @Column(name = "userid")
	public long userid;

	// @Column(name = "feedback")
	// private String feedback;

	@Column(name = "duration")
	private long duration;

	public WaterModel() {
	}

	public String getWaterPres() {
		return waterpres;
	}

	public void setWaterPres(String waterpres) {
		this.waterpres = waterpres;
	}

	public String getWaterDesc() {
		return waterdesc;
	}

	public void setWaterDesc(String waterdesc) {
		this.waterdesc = waterdesc;
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

	public long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
		this.userid = userid;
	}

	// public String getFeedback() {
	// 	return feedback;
	// }

	// public void setFeedback(String feedback) {
	// 	this.feedback = feedback;
	// }

	
	public long getDuration() {
		return duration;
	}

	public void setDuration(Long duration) {
		this.duration = duration;
	}

	public WaterModel(String waterpres, String waterdesc, String city, String location, Long userid,
			Long duration) {
		this.waterpres = waterpres;
		this.waterdesc = waterdesc;
		this.city = city;
		this.location = location;
		this.userid = userid;
		this.duration = duration;
	//	this.feedback = feedback;
	}

	
}
