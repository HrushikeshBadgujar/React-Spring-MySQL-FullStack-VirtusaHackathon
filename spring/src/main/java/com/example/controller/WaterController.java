package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
//import java.util.logging.LogManager;

import com.example.exception.ResourceNotFoundException;
import com.example.model.WaterModel;
import com.example.repository.WaterRepo;

import org.springframework.http.HttpHeaders;
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

@CrossOrigin(origins = "http://localhost:8082")     //change it later
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

    // // get water info by id
    // @GetMapping("getWaterInfo/{id}")
    // public ResponseEntity< WaterModel> getWaterInfoById(@PathVariable Long id){
    //     WaterModel waterModel = waterRepo.findById(id).orElseThrow(() -> 
    //         new ResourceNotFoundException("waterInfo not exist for this id"+ id));

    //     return ResponseEntity.ok(waterModel);

    // }

    // // update waterInfo
    // @PutMapping("/admin/{id}")
    // public ResponseEntity <WaterModel> waterInfoUpdate(@PathVariable Long id, @RequestBody WaterModel waterModelDetails){

    //     WaterModel waterModel = waterRepo.findById(id).orElseThrow(() -> 
    //         new ResourceNotFoundException("waterInfo not exist for this id"+ id));

    //     waterModel.setCity(waterModelDetails.getCity());
    //     waterModel.setLocation(waterModelDetails.getLocation());
    //     waterModel.setWaterDesc(waterModelDetails.getWaterDesc());
    //     waterModel.setWaterPres(waterModelDetails.getWaterPres());
        

    //     WaterModel updatedWaterModel = waterRepo.save(waterModel);
    //     return ResponseEntity.ok(updatedWaterModel);
    // }

    //adds new water Info
    @PostMapping("/addInfo")
    public WaterModel addWaterInfo(@RequestBody WaterModel waterModel){
//      System.out.println(waterModel.toString());
        return waterRepo.save(waterModel); 
    }

    // //delete water info
    // @DeleteMapping("/admin/{id}")
    // public ResponseEntity<Map<String,Boolean>> waterInfoDelete(@PathVariable Long id){
    //     WaterModel waterModel = waterRepo.findById(id).orElseThrow(() -> 
    //         new ResourceNotFoundException("waterInfo not exist for this userid"+ id));

    //     waterRepo.delete(waterModel);
    //     Map<String,Boolean> response = new HashMap<>();
    //     response.put("deleted", Boolean.TRUE);
    //     return ResponseEntity.ok(response);
    // }


    
}
