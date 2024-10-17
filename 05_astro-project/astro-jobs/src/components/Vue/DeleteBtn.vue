<script setup>
import "./useToastPlugin";

import { useToast } from "vue-toastification/dist/index.mjs";

const toast = useToast();

const { jobId } = defineProps({
  jobId: String
});

const handleDelete = async() => {
  try{
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if(confirm) {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE'
      });
      const deleted = response.json();
      toast.success('Job deleted successfully');
      window.location.href = `/jobs/`; // reroute to updated job page
    }
  } catch(error){
    console.log('error deleting job', error);
    toast.error(`Job not deleted`, );
  }
};
</script>

<template>
  <button
    @click="handleDelete"
    class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
  >
    Delete Job
  </button>
</template>