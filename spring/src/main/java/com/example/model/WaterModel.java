
public class WaterModel {
	private String waterPressure;
	private String waterDesc;
	private String city;
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
	public WaterModel(String waterPressure, String waterDesc, String city) {
		super();
		this.waterPressure = waterPressure;
		this.waterDesc = waterDesc;
		this.city = city;
	}
	public WaterModel() {
		super();
	}
	
	
}
