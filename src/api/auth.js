import axios from "axios";

import { env } from "../utils/config";

const endpoint = `${env.baseUrl}/api/v1`;

export default {
  getSystemRegistrationData() {
    return axios.get(`${endpoint}/register`);
  },
  login(data) { // data = {email, password}
    return axios.post(`${endpoint}/login`, data);
  },
  register(data) { // data = {email, password}
    return axios.post(`${endpoint}/register`, data);
  },
  forgotPassword() {
    return axios.post(`${endpoint}/forget-password`);
  },
  getResetPassword() {
    return axios.get(`${endpoint}/reset-password`);
  },
  resetPassword(data) {
    return axios.post(`${endpoint}/reset-password`, data);
  }
}