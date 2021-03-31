package com.example.repository;
import com.example.model.UserModel;

//before import download JpaRepository
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserModel, String>{
    
}
