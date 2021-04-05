package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.exception.ResourceNotFoundException;
import com.example.model.FeedbackModel;
import com.example.repository.FeedBackRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:8080")     //change it later
@RestController
@RequestMapping("/api/v1/")
public class FeedBackController {
    
    @Autowired
    private FeedBackRepo feedBackRepo;

    // save new feedback
    @PostMapping("/addFeedback")
    public FeedbackModel feedbackSave(@RequestBody FeedbackModel feedbackModel){
        return feedBackRepo.save(feedbackModel);
    }

    // get all feedbacks
    @GetMapping("/admin/feedback")
    @PreAuthorize("hasRole('USER')")
    public List <FeedbackModel> getFeedback(){
        return feedBackRepo.findAll();
    }

    // get feedback by id 
    @GetMapping("/admin/feedBack/{id}")
    public ResponseEntity <FeedbackModel> getFeedbackById(@PathVariable Long feedbackId){
        FeedbackModel feedbackModel = feedBackRepo.findById(feedbackId).orElseThrow(()-> new ResourceNotFoundException("feedback not found for id: "+ feedbackId));
        return ResponseEntity.ok(feedbackModel);

    }







}
