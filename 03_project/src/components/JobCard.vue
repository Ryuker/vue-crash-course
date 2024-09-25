<script setup>
import { defineProps } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'Job Type'
  },
  position: {
    type: String,
    default: 'Job Position'
  },
  description: {
    type: String,
    default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident, nihil recusandae inventore, ratione facere ea rerum quae!'
  },
  salary: {
    type: String,
    default: '$70 - $80K / Year'
  },
  location: {
    type: String,
    default: 'Boston, MA'
  },
  link: {
    type: String,
    default: 'https://google.com'
  }
})
</script>
<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ type }}</div>
        <h3 class="text-xl font-bold">{{ position }}</h3>
      </div>

      <div class="mb-5">
        {{ description }}
      </div>

      <h3 class="text-green-500 mb-2">{{ salary }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ location }}
        </div>
        <a
          :href="link"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>