import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, request }) => {
  console.log('request received');
  const jobId = params.jobId;

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/jobs';
  const uri = `${api_endpoint}/${jobId}`;
  const response = await fetch(uri);
  const jobData = await response.json();

  // mock data to serve directly (delete later)
  // const job = {
  //   "id": "1",
  //   "title": "Senior Vue Developer",
  //   "type": "Full-Time",
  //   "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as Vue or Angular.",
  //   "location": "Boston, MA",
  //   "salary": "$70K - $80K",
  //   "company": {
  //     "name": "NewTek Solutions",
  //     "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
  //     "contactEmail": "contact@teksolutions.com",
  //     "contactPhone": "555-555-5555"
  //   }
  // }

  const data = jobData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr);
}

export const PUT: APIRoute = async ({ params, request }) => {
  console.log('Put request received');
  const jobId = params.jobId;

  const updatedJob = await request.json();

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/jobs';
  const uri = `${api_endpoint}/${jobId}`;
  const response = await fetch(uri, {
    method: 'PUT',
    body: JSON.stringify(updatedJob)
  });

  const jobData = await response.json();

  const data = jobData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr);
}

export const DELETE: APIRoute = async ({ params, request }) => {
  console.log('Delete request received');
  const jobId = params.jobId;

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/jobs';
  const uri = `${api_endpoint}/${jobId}`;
  const response = await fetch(uri, {
    method: 'DELETE'
  });
  const jobData = await response.json();

  const data = jobData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr);
}