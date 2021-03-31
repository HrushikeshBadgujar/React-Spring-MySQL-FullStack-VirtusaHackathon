package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.exception.ResourceNotFoundException;
import com.example.model.UserModel;
import com.example.model.WaterModel;
import com.example.repository.WaterRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")     //change it later
@RestController
@RequestMapping("/api/v1/")
public class WaterController {

    @Autowired
    private WaterRepo waterRepo;

    // get all water info
    @GetMapping("/admin")
    public List <WaterModel> getWaterInfo(){
        return waterRepo.findAll();
    }

    // get water info by id
    @GetMapping("getWaterInfo/{id}")
    public ResponseEntity< WaterModel> getWaterInfoById(@PathVariable UserModel  user){
        WaterModel waterModel = waterRepo.findById(user.getUserid()).orElseThrow(() -> 
            new ResourceNotFoundException("waterInfo not exist for this userid"+ user.getUserid()));

        return ResponseEntity.ok(waterModel);

    }

    // update waterInfo
    @PutMapping("/admin/{id}")
    public ResponseEntity <WaterModel> waterInfoUpdate(@PathVariable UserModel userid, @RequestBody WaterModel waterModelDetails){

        WaterModel waterModel = waterRepo.findById(userid.getUserid()).orElseThrow(() -> 
            new ResourceNotFoundException("waterInfo not exist for this userid"+ userid.getUserid()));

        waterModel.setCity(waterModelDetails.getCity());
        waterModel.setLocation(waterModelDetails.getLocation());
        waterModel.setWaterDesc(waterModelDetails.getWaterDesc());
        waterModel.setWaterPressure(waterModelDetails.getWaterPressure());
        

        WaterModel updatedWaterModel = waterRepo.save(waterModel);
        return ResponseEntity.ok(updatedWaterModel);
    }

    //adds new water Info
    @PostMapping("/addInfo")
    public WaterModel waterInfoSave(@RequestBody WaterModel waterModel){
        return waterRepo.save(waterModel); 
    }

    //delete water info
    @DeleteMapping("/admin/{id}")
    public ResponseEntity<Map<String,Boolean>> waterInfoDelete(@PathVariable UserModel user){
        WaterModel waterModel = waterRepo.findById(user.getUserid()).orElseThrow(() -> 
            new ResourceNotFoundException("waterInfo not exist for this userid"+ user.getUserid()));

        waterRepo.delete(waterModel);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    
}
