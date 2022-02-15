import axios from 'axios';
import { env } from "../../utils/config";

const endpoint = `${env.baseUrl}/categories`;

export default {
  getListCategories(queryString = ''){
    return axios.get(`${endpoint}${queryString}`);
  }, 
  createCategory(data){
    return axios.post(`${endpoint}`, data);
  }, 
  getCategoryLists(id){
    return axios.get(`${endpoint}/${id}?_embed=lists`);
  }, 
  updateCategory(id, data){
    return axios.patch(`${endpoint}/${id}`, data);
  },
  deleteCategory(id){
    return axios.delete(`${endpoint}/${id}`);
  }, 
}