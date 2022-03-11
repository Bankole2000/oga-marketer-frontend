import axios from 'axios';
import { env } from "../../utils/config";

const endpoint = `${env.baseUrl}/smsSenders`;

export default {
  getSMSSenders(queryString = ''){
    return axios.get(`${endpoint}${queryString}`);
  },
  getSMSSenderDetails(id){
    return axios.get(`${endpoint}/${id}`);
  },
  createSMSSender(data){
    return axios.post(`${endpoint}`, data);
  },
  updateSMSSender(id, data){
    return axios.patch(`${endpoint}/${id}`, data);
  },
  deleteSMSSender(id){
    return axios.delete(`${endpoint}/${id}`);
  }
}