export default defineEventHandler( async(event) => {
  const { id } = event.context.params;
 
  const api_endpoint = 'http://localhost:5000/jobs/';
  const uri = `${api_endpoint}/${id}`;

  const { data } = await $fetch(uri);

  return data;
});