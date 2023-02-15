import axios from "axios";

const axiosCreate = axios.create({
  withCredentials: true,
  baseUrl: 'fakeUrl',
  headers: {
    "API-KEY": "ac70a3ee-d73f-4b96-a02e-68eb1be84bef"
  }
});

export const authAPI = {
  me() {
    return axiosCreate.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return axiosCreate.post(`auth/login`, {
      email,
      password,
      rememberMe
    })
  },
};
