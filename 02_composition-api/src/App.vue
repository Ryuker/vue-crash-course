<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'ahaha'
    };
  },
}
</script>

<template>
  <h1>Vue Options API Example</h1>
  <h2>{{ name }}</h2>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
</template>

<style scoped>
</style>
