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

## Conditional statements
- for this we use `v-if="status"`, 'status' is the variable we are referencing
example:
- displays specific `<p>` elements if status is true, pending or something else
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
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
</template>

<style scoped>
</style>

```

## iterating over an array
- we can use `v-for` to iterate over an array
  - we need to specify a key for UL elements (like is the case in React)
example:
- renders a list item for each task in the array with the task as content
``` Vue App.vue
<script>
export default {
  data() {
    return {
      tasks: ['Task One', 'Task Two', 'Task Three'],
    };
  },
}
</script>

<template>
<h3>Tasks:</h3>
<ul>
  <li v-for="task in tasks" :key="task">{{ task }}</li>
</ul>
</template>
```

## Binding
- we can bind an attribute to a data variable using `v-bind:`

example:
- we add a link as data attribute to the script export `link: 'https:google.com'`
- we bind the href to the link in the template
  - we can use `v-bind:href` for this or `:href`
    - so using a `:` specified a bind
``` Vue App.vue
<!-- long way -->
<a v-bind:href="link">Click for Google</a>

<!-- shorter version -->
<a :href="link">Click for Google</a>
```

## v-on directive
- using `v-on:` we can bind to events, the shorthand for binding to events is the `@` symbol
example:
  - button changes status using a method on click
``` Vue App.vue
<script>
export default {
  data() {
    return {
      status: 'ahaha',
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

<!-- long way -->
  <button v-on:click="toggleStatus">Change Status</button>
  
  <!-- shorter version -->
  <button @click="toggleStatus">Change Status</button>
```

# 03. Composition API examples to demonstrate vue syntax
- in the composition API we still need to export a setup function
  - to make variables reactive we can wrap them in a `ref` function, we import this from vue
  - since the composition API uses modules we have a return method in which we return the variables and the method.

``` Vue AppCompositionAPI.vue
<script>
import { ref } from 'vue';

export default {
  setup() {
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

    return {
      name,
      status,
      tasks,
      toggleStatus
    }
  }
}

</script>
```

## Shorter syntax
- if we specify `setup` as an attribute on the script tag we don't need to export and use the setup function
  - this means it's implicitly derived by the vue framework when reading out the component

- This is the cleanest approach for short code.
``` Vue AppCompositionAPI.vue
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
```

## v-model example
- we can use `v-model` to pass parameters to methods
example:
- Form to add tasks to a list
  - on the form we specify `@submit.prevent="addTask"` | note we can use .prevent to avoid having to use event.preventDefault

``` Vue AppCompositionAPI.vue
<script setup>
import { ref } from 'vue';

const tasks = ref(['Task One', 'Task Two', 'Task Three']);
const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim() !== ''){
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
    
}
</script>


<template>
<!-- form -->
<form @submit.prevent="addTask">
  <label for="newTask">Add Task</label>
  <input type="text" id="newTask" name="newTask" v-model="newTask"/>
  <button type="submit">Submit</button>
</form>
</template>
```

left vid at: 42:27
