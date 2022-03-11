import axios from 'axios';
import { env } from '../../utils/config';

const endpoint = `${env.baseUrl}/trackerEvents`;

export default {
  getTrackerEvents(queryString = ''){
    return axios.get(`${endpoint}${queryString}`);
  }
}