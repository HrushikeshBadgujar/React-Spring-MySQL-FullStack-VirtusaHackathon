import axios from 'axios';

const EMPLOYEE_API_BASE_URL = " _ ";

class UserService {

    createUser(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    
    checkUser(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    
    addWaterInfo(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getWaterInfoById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    addFeedback(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getFeedbackById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    
}

export default new UserService()