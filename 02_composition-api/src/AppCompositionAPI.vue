<script setup>
import { ref } from 'vue';

const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['Task One', 'Task Two', 'Task Three']);

const toggleStatus = () => {
  if (status.value === 'active')
    status.value = 'pending';
  else if (status.value === 'pending')
    status.value = 'inactive';
  else 
    status.value = 'active';
}
</script>

<template>
<h1>Vue Composition API Examples</h1>
  <h2>{{ name }}</h2>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <br>
  <!-- long way -->
  <button v-on:click="toggleStatus">Change Status</button>
  
  <!-- shorter version -->
  <button @click="toggleStatus">Change Status</button>
</template>


<style scoped>
</style>
