import axios from "axios";

import { env } from '../../utils/config';
const endpoint = `${env.baseUrl}/api/v1/account`;

export default {
  verifyTransaction(data) { // needs to send transaction reference
    return axios.get(`${endpoint}/transaction/verify`, data);
  },
  getAccountJson() {
    return axios.get(`${endpoint}/json`);
  },
  addNewCard(data) {
    return axios.post(`${endpoint}/new-card`, data);
  },
  topUpFromCard(data) {
    return axios.post(`${endpoint}/top-up/card`, data);
  },
  topUpFromPaypalCreate(data) {
    return axios.post(`${endpoint}/top-up/paypal/create`, data);
  },
  topUpFromPaypalExecute(data) {
    return axios.post(`${endpoint}/top-up/paypal/execute`, data);
  },
  topUpFromPaypalCancel(data) {
    return axios.post(`${endpoint}/top-up/paypal/cancel`, data);
  },
  getCards() {
    return axios.post(`${endpoint}/cards`);
  }
}