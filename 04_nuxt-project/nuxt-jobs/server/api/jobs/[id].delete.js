export default defineEventHandler(async(event) => {
  console.log('Delete Event Handler');
  // return 'post event received by api';
  const { id } = event.context.params;

  // // api call with private key
  const api_endpoint = `http://localhost:5000/jobs/${id}`;
  const data = await $fetch(api_endpoint, {
    method: 'DELETE'
  });

  // console.log('data', data);

  // // return api data
  return data;
});