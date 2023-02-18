import axios from "axios";

const axiosCreate = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:     {
    "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
});

export const authAPI = {
  me() {
    return axiosCreate.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return axiosCreate.post(`auth/login`, { email, password, rememberMe });
  },
};
