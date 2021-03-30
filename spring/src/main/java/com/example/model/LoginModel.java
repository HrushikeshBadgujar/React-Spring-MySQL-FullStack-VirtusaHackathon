
package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
// import javax.persistence.ID;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class LoginModel {

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "email_id")
    private String email;

    @Column(name = "password")
    private String password;
  public String getEmail() {
      return email;
  }
  public void setEmail(String email) {
      this.email = email;
  }
  public String getPassword() {
      return password;
  }
  public void setPassword(String password) {
      this.password = password;
  }
  public LoginModel(String email, String password) {
      super();
      this.email = email;
      this.password = password;
  }
  public LoginModel() {
      super();
  }
    
    
  }
  