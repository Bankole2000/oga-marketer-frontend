import axios from 'axios';
import { env } from "../../utils/config";

const endpoint = `${env.baseUrl}/campaigns`;

export default {
  getCampaigns(queryString = ''){
    return axios.get(`${endpoint}${queryString}`);
  },
  // getEmailSenderDetails(id){
  //   return axios.get(`${endpoint}/${id}`);
  // },
  // createEmailSender(data){
  //   return axios.post(`${endpoint}`, data);
  // },
  // updateEmailSender(id, data){
  //   return axios.patch(`${endpoint}/${id}`, data);
  // },
  // deleteEmailSender(id){
  //   return axios.delete(`${endpoint}/${id}`);
  // }
}