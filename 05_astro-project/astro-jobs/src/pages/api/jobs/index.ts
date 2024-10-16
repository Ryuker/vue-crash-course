import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, request }) => {
  console.log('Get request received');

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/jobs';
  const uri = `${api_endpoint}`;
  const response = await fetch(uri);
  const jobsData = await response.json();

  const data = jobsData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr);
}

export const POST: APIRoute = async ({ params, request }) => {
  console.log('Post request received');

  const newJob = await request.json();

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/jobs';
  const uri = `${api_endpoint}`;
  const response = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(newJob)
  });

  const jobsData = await response.json();

  const data = jobsData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr);
}