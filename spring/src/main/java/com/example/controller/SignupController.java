package com.example.controller;

import com.example.model.UserModel;
import com.example.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")     //change it later
@RestController
@RequestMapping("/api/vi/")
public class SignupController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/signup")
    public UserModel saveUser(@RequestBody UserModel userModel){
        return userRepo.save(userModel);

    }


//     @PostMapping("/process_register")
//     public String processRegister(UserModel user) {
//     BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//     String encodedPassword = passwordEncoder.encode(user.getPassword());
//     user.setPassword(encodedPassword);
     
//     userRepo.save(user);
     
//     return "register_success";
// }
    
    
}