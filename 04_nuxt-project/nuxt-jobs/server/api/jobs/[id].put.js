export default defineEventHandler(async(event) => {
  console.log('Put Event Handler');
  // return 'post event received by api';
  const { id } = event.context.params;

  // handle post data
  const { updatedJob } = await readBody(event);

  console.log('updatedJob', newJob);

  // // api call with private key
  const api_endpoint = `http://localhost:5000/jobs/${id}`;
  const data = await $fetch(api_endpoint, {
    method: 'PUT',
    body: updatedJob
  });

  console.log('data', data);

  // // return api data
  return data;
});