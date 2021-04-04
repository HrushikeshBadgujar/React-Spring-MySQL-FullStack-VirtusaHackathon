package com.example.controller;

// import com.example.model.UserModel;
// import com.example.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// @CrossOrigin(origins = "http://localhost:8082")     //change it later
// @RestController
// @RequestMapping("/api/v1/")
public class SignupController {

    // @Autowired
    // private UserRepo userRepo;

    // @PostMapping("/signup")
    // public String saveUser(@RequestBody UserModel userModel){

    //     BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();     
    //     String encodedPassword = passwordEncoder.encode(userModel.getPassword());
    //     userModel.setPassword(encodedPassword);

    //     userRepo.save(userModel);
    //     return "register_success";
        

    // }


// //     @PostMapping("/process_register")
// //     public String processRegister(UserModel user) {
// //     BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
// //     String encodedPassword = passwordEncoder.encode(user.getPassword());
// //     user.setPassword(encodedPassword);
     
// //     userRepo.save(user);
     
// //     return "register_success";
// // }
    
    
 }