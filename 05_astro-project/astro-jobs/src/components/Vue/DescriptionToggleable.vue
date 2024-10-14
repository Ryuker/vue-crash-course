<script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    description: {
      type: String,
      default: 'Job Description'
    }
  })
  
  let showFullDescription = ref(false);
  
  const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value;
  }
  
  const truncatedDescription = computed(() => {
    let description = props.description;
  
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