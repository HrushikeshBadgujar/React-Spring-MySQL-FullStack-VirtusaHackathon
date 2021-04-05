import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1";
//const EMPLOYEE_API_BASE_URL = "WaterTable";
//const EMPLOYEE_API_BASE_URL = "FeedbackTable";

// Add a request interceptor
axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.accessToken){
      const token = 'Bearer ' + user.accessToken;
      config.headers.Authorization =  token;
      
    }
  
    return config;
  });


class UserService {

    createUser(UserTable){
        return axios.post(EMPLOYEE_API_BASE_URL + "/signup", UserTable);
    }
    
    checkUser(UserTable){
        return axios.post(EMPLOYEE_API_BASE_URL+ "/login", UserTable);
    }
    
    addWaterInfo(WaterTable){
        console.log('WaterTable => ' + JSON.stringify(WaterTable));

        return axios.post(EMPLOYEE_API_BASE_URL +"/addInfo", WaterTable);
    }

    getWaterInfoById(UserId){
        return axios.get(EMPLOYEE_API_BASE_URL + "/getWaterInfo/" + UserId);
    }

    addFeedback(FeedbackTable){
        console.log('FeedbackTable => ' + JSON.stringify(FeedbackTable));
        return axios.post(EMPLOYEE_API_BASE_URL +"/addFeedback", FeedbackTable);
    }

    getFeedback(UserTable){
        return axios.get(EMPLOYEE_API_BASE_URL + '/getFeedback' + UserTable);
    }
    
}

export default new UserService()