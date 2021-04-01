import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:54287/api/v1/admin";

class AdminService {

    getAllWaterInfo(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteWaterInfo(userId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + userId);
    }

    updateWaterInfo(WaterTable, userId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' +  userId, WaterTable);
    }

    getAllFeedback(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/feedback");
    }

    getFeedbackId(userId){
        return axios.get(EMPLOYEE_API_BASE_URL +"/feedback/" + userId);
    }
    
    deleteFeedback(feedbackId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/feedback/' + feedbackId);
    }



    
}

export default new AdminService()