export default defineEventHandler( async(event) => {
  const { id } = event.context.params;
 
  const api_endpoint = 'some url';
  const uri = `${api_endpoint}?id=${id}`;

  const { data } = await $fetch(uri);

  return data;
});