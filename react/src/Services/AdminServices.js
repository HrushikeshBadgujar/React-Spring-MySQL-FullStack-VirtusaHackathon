import axios from 'axios';

const EMPLOYEE_API_BASE_URL = " _ ";

class AdminService {

    getAllWaterInfo(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteWaterInfo(userId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + userId);
    }

    updateWaterInfo(WaterTable, userId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + WaterTable, userId);
    }

    getAllFeedback(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getFeedbackId(userId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + userId);
    }
    
    deleteFeedback(feedbackId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + feedbackId);
    }



    
}

export default new AdminService()