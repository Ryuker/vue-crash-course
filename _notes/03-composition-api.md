# 3. Examples in composition API notes
- uses node v20.16.0 (use NVM 20)

# 01. Setup
- specify the folder name at the end of the install command 
``` shell
npm create vue@latest 02_vue-crash-2024
```
- run `npm i` to install the dependencies


left vid at: 22:15 - [vid](https://www.youtube.com/watch?v=VeNfHj6MhgA&t=1334s)

## Basic mounting setup (already included in project scaffold)
```js src/main.js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

- cleaned out App.vue for a clean start
- cleaned out components folder

# 02. Options API example to demonstrate vue syntax

## If statements
- for this we use `v-if="status"`, 'status' is the variable we are referencing
example:
- displays a paragraph if status is true
``` Vue App.vue
<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: true
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

```