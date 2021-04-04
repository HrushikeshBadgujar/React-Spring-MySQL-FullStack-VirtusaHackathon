import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/admin";

// Add a request interceptor
axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.accessToken){
      const token = 'Bearer ' + user.accessToken;
      config.headers.Authorization =  token;
      
    }
  
    return config;
  });

class AdminService {

    async getAllWaterInfo(){
        return await axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteWaterInfo(userid){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + userid);
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