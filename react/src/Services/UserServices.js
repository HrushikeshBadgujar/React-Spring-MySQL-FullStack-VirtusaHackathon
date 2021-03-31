import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "UserTable";
//const EMPLOYEE_API_BASE_URL = "WaterTable";
//const EMPLOYEE_API_BASE_URL = "FeedbackTable";


class UserService {

    createUser(UserTable){
        return axios.post(EMPLOYEE_API_BASE_URL, UserTable);
    }
    
    checkUser(UserTable){
        return axios.post(EMPLOYEE_API_BASE_URL, UserTable);
    }
    
    addWaterInfo(WaterTable){
        return axios.post(EMPLOYEE_API_BASE_URL, WaterTable);
    }

    getWaterInfoById(UserId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + UserId);
    }

    addFeedback(FeedbackTable){
        return axios.post(EMPLOYEE_API_BASE_URL, FeedbackTable);
    }

    getFeedback(UserTable){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + UserTable);
    }
    
}

export default new UserService()