
package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
 import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class LoginModel {

    @Id
    @Column(name = "user_id")
    private String user_id;

    @Column(name = "password" )
    private String password;

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LoginModel(String user_id, String password) {
        this.user_id = user_id;
        this.password = password;
    }

    public LoginModel() {
    }


 
    
    
  }
  