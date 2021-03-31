
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ID;
import javax.persistence.Table;

@Entity
@Table(name = "waterInfo")
public class WaterModel {
	@Column(name = "water_pressure")
	private String waterPressure;

	@Column(name = "water_desc")
	private String waterDesc;

	@Column(name = "city")
	private String city;

	@Column(name = "location")
	private String location;            //location means areaname

	@ID
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public UserModel userid;

	@ID
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public FeedbackModel feedbackID;

	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

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
