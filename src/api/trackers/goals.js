import axios from 'axios';
import { env } from "../../utils/config";

const endpoint = `${env.baseUrl}/trackerGoals`;

export default {
  getTrackerGoals(queryString = ''){
    return axios.get(`${endpoint}${queryString}`)
  }
}