export default defineEventHandler(async(event) => {

  // api call with private key
  const api_endpoint = 'http://localhost:5000/jobs';
  const data = await $fetch(api_endpoint);

  // return api data
  return data;
});