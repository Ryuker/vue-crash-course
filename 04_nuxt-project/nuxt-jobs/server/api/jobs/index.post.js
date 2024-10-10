export default defineEventHandler(async(event) => {
  console.log('Post Event Handler');
  // return 'post event received by api';

  // handle post data
  const { newJob } = await readBody(event);

  console.log('newJob', newJob);

  // // api call with private key
  const api_endpoint = 'http://localhost:5000/jobs';
  const data = await $fetch(api_endpoint, {
    method: 'POST',
    body: newJob
  });

  console.log('data', data);

  // // return api data
  return data;
});