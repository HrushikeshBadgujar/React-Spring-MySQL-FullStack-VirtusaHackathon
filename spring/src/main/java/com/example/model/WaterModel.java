
public class WaterModel {
	private String waterPressure;
	private String waterDesc;
	private String city;
	private String location;
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	//userId: userModel
	//feedback: feedbackmodel
	public String getWaterPressure() {
		return waterPressure;
	}
	public void setWaterPressure(String waterPressure) {
		this.waterPressure = waterPressure;
	}
	public String getWaterDesc() {
		return waterDesc;
	}
	public void setWaterDesc(String waterDesc) {
		this.waterDesc = waterDesc;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public WaterModel(String waterPressure, String waterDesc, String city, String location) {
		super();
		this.waterPressure = waterPressure;
		this.waterDesc = waterDesc;
		this.city = city;
		this.location = location;
	}
	public WaterModel() {
		super();
	}
	
	
}
