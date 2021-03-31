package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feedback")

public class FeedbackModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "feedback_id")
	private long feedbackId;

	@Column(name = "feedbac_decs")
	private String feedbacDesc;
 
	public long getFeedbackId() {
		return feedbackId;
	}
	public void setFeedbackId(long feedbackId) {
		this.feedbackId = feedbackId;
	}
	public String getFeedbacDesc() {
		return feedbacDesc;
	}
	public void setFeedbacDesc(String feedbacDesc) {
		this.feedbacDesc = feedbacDesc;
	}
	public FeedbackModel(long feedbackId, String feedbacDesc) {
		super();
		this.feedbackId = feedbackId;
		this.feedbacDesc = feedbacDesc;
	}
	public FeedbackModel() {
		super();
	}
	
	
}

