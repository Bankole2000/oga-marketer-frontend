import axios from 'axios';
import { env } from "../../utils/config";

const endpoint = `${env.baseUrl}/transactions`;

export default {
  getTransactions(queryString = ''){
    return axios.get(`${endpoint}${queryString}`);
  },
  getTransactionDetails(id){
    return axios.get(`${endpoint}/${id}`);
  },
  createTransaction(data){
    return axios.post(`${endpoint}`, data);
  },
  updateTransaction(id, data){
    return axios.patch(`${endpoint}/${id}`, data);
  },
  deleteTransaction(id){
    return axios.delete(`${endpoint}/${id}`);
  }
}