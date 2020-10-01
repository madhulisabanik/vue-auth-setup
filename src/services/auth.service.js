import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

class AuthService {
  login(user) {
    return axios.post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then((response) => {
        if (response.data.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }
        return response.data.data;
      })
      .catch((error) => {
          console.log(error);
      })
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      email: user.email,
      name: user.name,
      password: user.password,
      password_confirmation: user.password_confirmation,
      phone_number: user.phone_number,
      address: user.address
    })
    .then((response) => {
        return response.data.data;
    })
    .catch((error) => {
        console.log(error);
    })
  }
}

export default new AuthService();