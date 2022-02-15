import axios from 'axios';
import { env } from "../../utils/config";

const endpoint = `${env.baseUrl}/contacts`;

export default {
  getContacts(page = 1, limit = 12){
    return axios.get(`${endpoint}?_page=${page}&_limit=${limit}`);
  }, 
  createContact(data){
    return axios.post(`${endpoint}`, data);
  }, 
  getContact(id){
    return axios.get(`${endpoint}/${id}`);
  }, 
  updateContact(id, data){
    return axios.patch(`${endpoint}/${id}`, data);
  },
  deleteContact(id){
    return axios.delete(`${endpoint}/${id}`);
  }
}