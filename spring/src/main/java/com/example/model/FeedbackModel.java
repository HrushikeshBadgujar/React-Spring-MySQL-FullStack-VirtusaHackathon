
public class FeedbackModel {
	private String feedbackId;
	private String feedbacdesc;
	public String getFeedbackId() {
		return feedbackId;
	}
	public void setFeedbackId(String feedbackId) {
		this.feedbackId = feedbackId;
	}
	public String getFeedbacdesc() {
		return feedbacdesc;
	}
	public void setFeedbacdesc(String feedbacdesc) {
		this.feedbacdesc = feedbacdesc;
	}
	public FeedbackModel(String feedbackId, String feedbacdesc) {
		super();
		this.feedbackId = feedbackId;
		this.feedbacdesc = feedbacdesc;
	}
	public FeedbackModel() {
		super();
	}
	
	
}
