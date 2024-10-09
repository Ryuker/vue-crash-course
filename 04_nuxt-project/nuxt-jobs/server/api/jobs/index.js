import jobData from '../data/jobs.json';

export default defineEventHandler(async(event) => {

  // api call with private key
  // const api_endpoint = 'some url';
  // const { data } = await $fetch(api_endpoint);
  

  const data = jobData;
  // return api data
  return data;
});