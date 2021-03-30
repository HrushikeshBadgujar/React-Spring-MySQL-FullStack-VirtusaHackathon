import axios from 'axios';

const EMPLOYEE_API_BASE_URL = " _ ";

class AdminService {

    getAllWaterInfo(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteWaterInfo(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateWaterInfo(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    getAllFeedback(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getFeedback(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }


    
}

export default new AdminService()