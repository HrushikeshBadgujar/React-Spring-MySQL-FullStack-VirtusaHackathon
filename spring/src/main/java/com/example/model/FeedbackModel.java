package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ID;
import javax.persistence.Table;

@Entity
@Table(name = "feedback")

public class FeedbackModel {
	@ID
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String feedbackId;

	@Column(name = "feedbac_decs")
	private String feedbacDesc;
	//I think we dont require set and get method for feedbackid as we do in usermodel for userid 
	// public String getFeedbackId() {
	// 	return feedbackId;
	// }
	// public void setFeedbackId(String feedbackId) {
	// 	this.feedbackId = feedbackId;
	// }
	public String getFeedbacDesc() {
		return feedbacDesc;
	}
	public void setFeedbacDesc(String feedbacDesc) {
		this.feedbacDesc = feedbacDesc;
	}
	public FeedbackModel(String feedbackId, String feedbacDesc) {
		super();
		this.feedbackId = feedbackId;
		this.feedbacDesc = feedbacDesc;
	}
	public FeedbackModel() {
		super();
	}
	
	
}

