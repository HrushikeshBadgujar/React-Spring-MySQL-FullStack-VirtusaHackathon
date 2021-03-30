package com.example.controller;

import java.util.List;

import com.example.model.WaterModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")     //change it later
@RestController
@RequestMapping("/api/vi/")
public class WaterController {

    @Autowired
    private WaterRepository waterRepository;

    // get all water info
    @GetMapping("waterInfo")
    public List <WaterModel> getWaterInfo(){
        return waterRepository.findAll();
    }

    // get water info by id
    @GetMapping("waterInfo/{id}")
    public WaterModel getWaterInfoById(String id){
        

    }
    
}
