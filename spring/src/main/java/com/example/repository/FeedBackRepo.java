package com.example.repository;

import com.example.model.FeedbackModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedBackRepo extends JpaRepository<FeedbackModel, String>{
    
}
