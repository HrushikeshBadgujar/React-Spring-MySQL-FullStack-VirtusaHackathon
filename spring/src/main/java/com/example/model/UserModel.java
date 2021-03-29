
public class UserModel {
	private String email;
	private String firstName;
	private String lastName;
	private String password;
    private String mobileNo;
    private boolean active;
    private String role;
    
 
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
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
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
	public UserModel() {
		super();
	}
    
    
}
