package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feedback")

public class FeedbackModel {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "feedbackId")
	private String feedbackId;

	@Column(name = "feedbackDesc")
	private String feedbackDesc;
 
	public String getFeedbackId() {
		return feedbackId;
	}
	public void setFeedbackId(String feedbackId) {
		this.feedbackId = feedbackId;
	}
	public String getFeedbackDesc() {
		return feedbackDesc;
	}
	public void setFeedbackDesc(String feedbackDesc) {
		this.feedbackDesc = feedbackDesc;
	}
	public FeedbackModel(String feedbackId, String feedbackDesc) {
		super();
		this.feedbackId = feedbackId;
		this.feedbackDesc = feedbackDesc;
	}
	public FeedbackModel() {
		super();
	}
	
	
}

