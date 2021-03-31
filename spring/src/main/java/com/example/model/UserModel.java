package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class UserModel {
	@Id
	@Column(name = "user_id")
	private String userid;

<<<<<<< HEAD
	@Column(nullable = false, unique = true, length = 45, name = "email_id")
=======
	// @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "email_id", referencedColumnName = "id")
	@Column(name = "email_id", unique = true)
>>>>>>> e0c82ded7f3d2193eeb09c902c0db095406f02e0
	private String email;

	@Column(name = "first_name", nullable = false, length = 20)
	private String firstName;

	@Column(name = "last_name", nullable = false, length = 20)
	private String lastName;

	@Column(nullable = false, length = 64, name = "password")
	private String password;

	@Column(name = "mobile_no", nullable = false, length = 10)
    private String mobileNo;
	
	@Column(name = "active")
    private boolean active;

	@Column(name = "role")
    private String role;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

<<<<<<< HEAD
	@Column(name = "active", nullable = false)
    private boolean active;

	@Column(name = "role", nullable = false)
     private String role;
    
 
=======
>>>>>>> e0c82ded7f3d2193eeb09c902c0db095406f02e0
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
<<<<<<< HEAD
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	 public UserModel(String email, String firstName, String lastName, String password, String mobileNo, boolean active,
				String role) {
			super();
			this.email = email;
			this.firstName = firstName;
			this.lastName = lastName;
			this.password = password;
			this.mobileNo = mobileNo;
			this.active = active;
			this.role = role;
		}
=======

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public UserModel(String userid, String email, String firstName, String lastName, String password, String mobileNo,
			boolean active, String role) {
		this.userid = userid;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.mobileNo = mobileNo;
		this.active = active;
		this.role = role;
	}

>>>>>>> e0c82ded7f3d2193eeb09c902c0db095406f02e0
	public UserModel() {
	}
    
 
    
    
}

