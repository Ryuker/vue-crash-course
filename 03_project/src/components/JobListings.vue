<script setup>
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { RouterLink } from 'vue-router';
// import jobData from '@/data/jobs.json';
import { ref, reactive, onMounted} from 'vue';
import JobListing from './JobListing.vue';

// const jobs = ref([]);
const state = reactive({
  jobs: [],
  isLoading: true
});

defineProps({
  limit: {
    type: Number,
    default: null
  },
  showButton: {
    type: Boolean,
    default: false
  }
})

onMounted(async () => {
  try{
    const response = await axios.get('/api/jobs');
    // jobs.value = response.data;
    state.jobs = response.data;
  } catch(error){
    console.error('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});

</script>
<template>
  <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <!-- Show loading spinner while loading is true -->
        <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
          <PulseLoader />
        </div>
        <!-- Show job listing when done loading -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"/>
        </div>
      </div>
    </section>
    <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink v-if="showButton"
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>