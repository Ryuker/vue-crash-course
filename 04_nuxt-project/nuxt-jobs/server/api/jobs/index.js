export default defineEventHandler(async(event) => {

  // handle post data
  const { id } = await readBody(event);

  // api call with private key
  const api_endpoint = 'some url';
  const { data } = await $fetch(api_endpoint);

  // return api data
  return data;
});