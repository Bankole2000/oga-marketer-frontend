import axios from 'axios';
import { env } from '../../utils/config';

const endpoint = `${env.baseUrl}/emailTemplates`;
const sampleEndpoint = `${env.baseUrl}/emailTemplateSamples`;

export default {
  getEmailTemplates(){
    return axios.get(endpoint);
  },
  getEmailTemplateSamples(){
    return axios.get(sampleEndpoint);
  },
  getEmailTemplateDetails(id){
    return axios.get(`${endpoint}/${id}`);
  }
}