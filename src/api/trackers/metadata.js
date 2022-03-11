import metadata from '../../data/events_metadata.json';
// import { env } from '../../utils/config';

// const endpoint = `${env.baseUrl}/events/metadata`;

export default {
  getEventsMetadata(){
    return new Promise((resolve) => { 
      resolve(metadata)
    })
  }
}