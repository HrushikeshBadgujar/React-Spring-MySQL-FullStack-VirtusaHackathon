package com.example.repository;

import com.example.model.UserModel;
import com.example.model.WaterModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaterRepo extends JpaRepository<WaterModel, String>{
    
}
