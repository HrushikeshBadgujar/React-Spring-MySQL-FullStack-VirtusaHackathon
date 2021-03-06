import axios from "axios";

/**
 * @Copyright by https://loizenai.com
 *        youtube loizenai
 */
 const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/auth";

class AuthenticationService {
  signin = (username, password) => {
      return axios.post(EMPLOYEE_API_BASE_URL + "/signin", {username, password})
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async(firstname, lastname, username, email, password,mobileno) => {
    //console.log({firstname, lastname, username, email, password,mobileno})
    return axios.post(EMPLOYEE_API_BASE_URL +"/signup", {
      firstname,
      lastname,
      username,
      email,
      password,
      mobileno
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();