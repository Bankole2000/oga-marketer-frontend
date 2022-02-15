import axios from 'axios';
import { env } from "../../utils/config";

const endpoint = `${env.baseUrl}/lists`;

export default {
  getLists(queryString = ''){
    return axios.get(`${endpoint}${queryString}`);
  }, 
  createList(data){
    return axios.post(`${endpoint}`, data);
  }, 
  getListContacts(id, queryString = ``){
    return axios.get(`${endpoint}/${id}${queryString}`);
  }, 
  updateList(id, data){
    return axios.patch(`${endpoint}/${id}`, data);
  },
  deleteList(id){
    return axios.delete(`${endpoint}/${id}`);
  }, 
}