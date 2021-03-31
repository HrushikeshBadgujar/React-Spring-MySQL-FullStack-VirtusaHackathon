package com.example.model;

>>>>>>> 2f76eade0cbe612cb6ed7c1b60bac7379670861e
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
	@Column(name = "userid")
	public String userid;

	
	@Column(name = "feedbackId")
	public String feedbackID;

	

	
	
	
}
