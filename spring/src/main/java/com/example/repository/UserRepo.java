package com.example.repository;
import com.example.model.UserModel;

//before import download JpaRepository
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserModel, String>{
    @Query("SELECT u FROM UserModel u WHERE u.email = ?1")
	public UserModel findByEmail(String email);
}
