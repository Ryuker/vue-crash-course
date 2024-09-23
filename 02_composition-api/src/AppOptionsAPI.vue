<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'ahaha',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      link: 'https:google.com',
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active')
        this.status = 'pending';
      else if (this.status === 'pending')
        this.status = 'inactive'
      else 
        this.status = 'active'
    }
  }
}
</script>

<template>
  <h1>Vue Options API Examples</h1>
  <h2>{{ name }}</h2>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- long way -->
  <a v-bind:href="link">Click for Google</a>

  <!-- shorter version -->
  <a :href="link">Click for Google</a>

  <br>
  <!-- long way -->
  <button v-on:click="toggleStatus">Change Status</button>
  
  <!-- shorter version -->
  <button @click="toggleStatus">Change Status</button>

</template>

<style scoped>
</style>
