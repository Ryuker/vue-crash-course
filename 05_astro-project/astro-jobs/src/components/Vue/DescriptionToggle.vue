<script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    job: {
      type: Object,
      default: {
        id: 0,
        type: 'Job Type',
        title: 'Job Title',
        description: 'Job Description',
        salary: 'Job Salary',
        location: 'Job Location',
      }
    }
  })
  
  let showFullDescription = ref(false);
  
  const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value;
  }
  
  const truncatedDescription = computed(() => {
    let description = props.job.description;
  
    if(!showFullDescription.value) {
      description = description.substring(0, 90) + '...';
    }
    return description;
  });
  </script>

  <template>
    <div class="mb-5">
        <div>{{ truncatedDescription }}</div>
        <button 
          @click="toggleFullDescription" 
          class="text-green-500 hover:text-green-600 mb-5">
          {{ showFullDescription ? 'Less' : 'More' }}
        </button>
      </div>
  </template>