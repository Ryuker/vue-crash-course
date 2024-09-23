<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: false
    };
  },
}
</script>

<template>
  <h1>Vue Options API Example</h1>
  <h2>{{ name }}</h2>
  <p v-if="status">User is active</p>
</template>

<style scoped>
</style>
