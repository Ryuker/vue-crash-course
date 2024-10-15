import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, request }) => {
  console.log('request received');

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/jobs';
  const uri = `${api_endpoint}`;
  const response = await fetch(uri);
  const jobsData = await response.json();

  const data = jobsData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr);
}