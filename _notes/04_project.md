# Project Notes

# 01. Setup
- copied over content from 02_composition-api and cleaned it up as starting point

## Setting Up Tailwind
- [setup instructions](https://tailwindcss.com/docs/guides/vite#vue)
``` shell 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- specified content key in tailwind.config.js
``` js tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
```
- Added `src/style.css`
- Imported style into main.js | `import './style.css';`

## Configured theme
- specified `Poppins` as font to use
- added a utility class to gridTemplateColumns
```js tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    gridTemplateColumns: {
      '70/30': '70% 28%'
    }
  },
},
```

# 02. Navbar Component
- added `components/Navbar.vue`

## importing logo
- we import the logo using the @ shorthand to get to the assets folder (this is a vite feature)
```vue components/Navbar.vue
<script setup>
  import logo from '@/assets/img/logo.png';
</script>
```

## Template code
- from the html design we copy over the nav element and paste it into the template tag
  - we modify the img element to bind the `src` attribute to the logo using the `:` shorthand
  ``` <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" /> `
```HTML Navbar.vue
<nav class="bg-green-700 border-b border-green-500">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="flex h-20 items-center justify-between">
      <div
        class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
      >
        <!-- Logo -->
        <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
          <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
          <span class="hidden md:block text-white text-2xl font-bold ml-2"
            >Vue Jobs</span
          >
        </a>
        <div class="md:ml-auto">
          <div class="flex space-x-2">
            <a
              href="index.html"
              class="text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              >Home</a
            >
            <a
              href="jobs.html"
              class="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2"
              >Jobs</a
            >
            <a
              href="add-job.html"
              class="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2"
              >Add Job</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
```

## Importing the Navbar Component into the App
- we import the component and render it into the template, simple stuff
```vue App.vue
<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
</template>
```

# 03. Hero Component
- added `components/Hero.vue`
- added script and template tags
- copied over HTML into template tag
``` HTML Hero.vue
<template>
<section class="bg-green-700 py-20 mb-4">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
  >
    <div class="text-center">
      <h1
        class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
      >
        Become a Vue Dev
      </h1>
      <p class="my-4 text-xl text-white">
        Find the Vue job that fits your skills and needs
      </p>
    </div>
  </div>
</section>
</template>
```
- imported component into App.vue and rendered inside template tag

## Passing props to the Hero Component
- for this we need to import the `defineProps` function from vue
- we then run the function and pass it an object with the props specifications
example:
```Vue components/hero.vue
<script>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev'
  }
})
</script>
```

- We then render the title inside the template using `{{ title }}
- We then specify title in `App.vue` on the hero element | `<Hero title="Test Title" />`
- did the same for the subtitle

# 03. Home Cards Component
- Added `components/HomeCards.vue` with a basic template and imported into App.vue
- copied over `developers and employers` html from design

# 04. Card component
- this is to give flexibility to reuse the cards with different colors etc
- added `components/Card.vue` with basic template and imported into `HomeCards.vue`
- cut and pasted the card html in the developers and employers section. 
  - We'll modify this to be reusable

## using props to make the background color dynamic
- defined a `bgColor` prop on the component 
  - referencing this prop in the class attribute using a bind with the `:`
  - specified color on the component inside `HomeCards.vue`
```Vue Card.vue
<script setup>
import { defineProps } from 'vue';

defineProps({
  bgColor: {
    type: String,
    default: 'bg-gray-100'
  }
})

</script>
<template>
  <div :class="`${bgColor} p-6 rounded-lg shadow-md`">
    <!-- other content -->
</template>
```

## Using slots to pass in content to the component
- added `<slot />` into the component template
- specified the content inside the render of the card component
``` JS HomeCards.vue
<template>
  <Card bgColor="bg-gray-100">
    <h2 class="text-2xl font-bold">For Developers</h2>
      <p class="mt-2 mb-4">
        Browse our Vue jobs and start your career today
      </p>
      <a
        href="jobs.html"
        class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        Browse Jobs
      </a>
  </Card>
<template>
```

# 05. Job Listings Component
- added `components/JobListings.vue` with basic template and imported into `App.vue`
- copied over the HTML from the design
- broke down which props we'll need
  - type      - String - remote, full-time
  - position  - String 
  - description - String
  - salary    - String
  - location  - String
  - link      - String

## Job Listing Component
- added `components/JobListing.vue`
- copied over the JobListing HTML from the design in the JobCard template tag
- imported card into `JobListings.vue`
- specified props in JobListing to dynamically render data
  - and rendered this data inside the component in the proper places
- specified JobListing attributes in JobListings
```Vue JobListing.vue
<script setup>
defineProps({
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
</script>
```


## Define Props is Compiler Macro
- apparantly in Vite there's no need to import defineProps anymore in a vue project
  - it's a compiler macro that just handles the import
  - so I removed it from the components.

# 06. All Jobs Section
- this isn't really component worthy imo since it's just one section
  - so I just copied over the HTML from the design and changed the link

# 07. Importing Jobs mock data from JSON file  
- added job.json to `data/jobs.json` | also added jobs2.json
- imported the data into `JobListings.vue`
- used v-for to display a JobListing component for each job
``` Vue JobListings.vue
<script setup>
import JobListing from './JobListing.vue';
import jobData from '@/data/jobs2.json';
import { ref } from 'vue';

const jobs = ref(jobData);

</script>

<template>
<!-- other template code -->
  <JobListing v-for="job in jobs" :key="job.id" :job="job"/>
<!-- other template code -->
</template>
```

# 08. Limiting amount of jobs displayed in JobListings component
- defined a limit prop in `JobListings.vue`
```JS JobListings.vue
defineProps({
  limit: {
    type: Number,
    default: 3
  }
})
```
- used the limit to slide the array in the template tag `v-for="job in jobs.slice(0, limit || jobs.length)"`
- specified the limit on the component in App.vue

# View all Jobs section and button
- added showButton as prop to JobListings props
```JS JobListings.vue
showButton: {
  type: Boolean,
  default: false
}
```
- used v-if to only show the button when the boolean is true
``` HTML JobListings
<a v-if="showButton"
  href="/jobs"
  class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
  >View All Jobs</a
>
```

# 09. Computed function
- `computed` takes in a function. 
  - in this function we can evaluate value changes and run code in response.
    - it's comparable to useEffect in React
  - computed props themselves are `readonly` | [explanation](https://medium.com/@joaofornazari/computed-vs-ref-props-on-vue-3-582b1327e74a)
    - computed props are operations done on reactive props, and the computed prop itself is readonly;
    - ref props are reactive props and can be changed, and can only be set by passing objects to it, not operations.

## Truncated Job Description
- we're using this to show a truncated description
  - We import ref and computed from vue
  - we store defineProps into a props variable so we can access props in the object
  - We declare a boolean ref value to toggle the description display later
  - We declare a `toggleFullDescription` function that toggles the boolean
  - We declare a computed property with a callback function
    - in the computed property we get the full description
    - we check the toggle boolean
      - if the boolean is false we truncate the description and return the results  

  - we then render the computer property in the template tag
Example:
```JS Vue JobListing.vue
import { ref, computed } from 'vue';
const props = defineProps({
  // props
})

const showFullDescription = ref(false);

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
```
```HTML JobListing.vue
<div class="mb-5">
  <div>{{ truncatedDescription }}</div>
  <button 
    @click="toggleFullDescription" 
    class="text-green-500 hover:text-green-600 mb-5">
    {{ showFullDescription ? 'Less' : 'More' }}
  </button>
</div>
```

# 10. Location Icons using PrimeIcons
- [website](https://primevue.org/icons)
``` shell 
npm install primeicons
``` 
- we install this package with NPM and then import it into main.js
``` JS main.js
import 'primeicons/primeicons.css';
```
- We the use the prime classes on the `<i>` element
``` HTML
<i class="pi pi-map-marker text-orange-700"></i>
```

# 11. Setting up Vue Router
- normally we'd just install the router with the full vue installation instead when we create a vite project
- but to leanr how to set it up we install the package
``` shell
npm i vue-router
```
- we added `src/router`
- inside this we add `index.js`
- we import `createRouter` and `createWebhistory` into index.js
- we need a view to import so we add `src/views`, a view is is basically a page

## Setting up Home View
- we add `views/HomeView.vue`
- we copy over the components from App.vue apart from the Navbar
```Vue HomeView.vue
<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <Hero title="Become a Vue Dev" subTitle="Find the Vue job that fits your skills and needs"/>
  <HomeCards />
  <JobListings limit="6" showButton="true"/>
</template>
```
- In App.view we remove the components apart from the navbar

## Creating the router
- in `router/index.js` we declare a router constant and export it
  - very similar to React router approach
``` JS index.js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }
  ]
});

export default router;
```

## Specifying the router to be used as middleware in main.js
- in `src/main.js` we import the router and then modify the code so we can specify the router as middleware
  - very similar to what we do in Express
``` JS main.js

import router from './router';
import { createApp } from 'vue'
import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#app');
```

## Rendering the View in App.vue
- In App.vue we import RouterView and then display it in the template tag
  - similar to an 'outlet' in React-Router
```JS App.vue
<script setup>
  import Navbar from './components/Navbar.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar />
  <RouterView />
</template>
```

# 12. Adding the Job Page and AddJob Route
- added `views/JobsView.vue` with a basic template
- added Jobs page to router and imported the view
- modified navbar to link to the proper urls

# 13. Job Page Content
- we just import the job listings component into `views/JobsView.vue` and render it
```JS JobListings.vue
<script setup>
import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <JobListings limit="6"/>
</template>
```

# 14. Using RouterLink instead of the <a> tags
- routerlink prevents us from having to refresh the page, this is better for performance and network impacts
- imported `RouterLink` from vue-router into Navbar
- changed the a elements to use RouterLink instead
  - this requires we change `href` to `to` instead

example: 
```Vue components/Navbar.vue
<RouterLink to="/">
  Home
</RouterLink>
```

- Imported and used `RouterLink` in `HomeCards.vue`, `JobListings.vue` and`JobListing.vue` as well

## 15. Navbar active link
- for this we import `useRoute` from `vue-router` in `Navbar.vue`
- we add a function to check if we are on the activeLink page
``` JS components/Navbar.vue
const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
```
- we bind the class of the RouterLinks and specify the active link classes using a ternary
  - note that when we bind to the class attribute we can specify css classes in an array
``` JS components/Navbar.vue
<RouterLink to="/"
  :class="[isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover-text-white', 
  'text-white', 'rounded-md', 'px-3', 'py-2']">
  Home
</RouterLink>
```

# 16. Not Found Page and Route
- added `views/NotFoundView.vue`
```JS NotFoundView.vue
<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
      <i class="pi pi-exclamation-triangle text-yellow-500 text-7xl mb-5"></i>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink
        to="/"
        class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
        >Go Back
      </RouterLink>
    </section>
</template>
```

- Added route to `router/index.js`
  - we specify `/:catchAll(.*)` to catch all urls that don't have a route yet
``` JS router/index.js
{
  path: '/:catchAll(.*)',
  name: 'not-found',
  component: NotFoundView,
}
```

# 17. JobView component and route
- added `views/JobView.vue`
- copied over HTML from design
- imported RouterLink and changed links to use this instead
- imported the view and added route | we use `/:id` in the path to route to a dynamic id
```JS router/index.js
{
  path: '/jobs/:id',
  name: 'job',
  component: JobView
},
```

# 18. Implement JSON server to serve data
to install:
``` shell
npm i json-server
```
- JSON Server serves a JSON file that you specify in package.json
  - you also specify a port
- modified jobs.json to have jobs as a key in an object
``` JSON jobs.json
{
  "jobs": [
    // jobs data
  ]
}
```
- added a server script to package.json
```js package.json
"server": "json-server --watch src/jobs.json --port 5000"
```

# 19. Setting up Axios to fetch the data
- this is option but it's ok to setup I think
- to install:
```shell
npm i axios
```

# 20. Modifying JobListings to use Axios to fetch the jobs data
- we import `axios`
- modified job constant ref to use an empty array
- imported `onMounted` from vue
- in onMounted, added an async callback function in which the data is fetches and set using axios.
``` JS components/JobListings.vue
const jobs = ref([]);
// other code
onMounted(async () => {
  try{
    const response = await axios.get('http://localhost:5000/jobs');
    jobs.value = response.data;
  }catch(error){
    console.error('Error fetching jobs', error);
  }
});
```

# 21. Ref vs Reactive
- This a different way to deal with reactive data on a page
differences:
  - `reactive()` 
    - only takes objects. It does not take primitives like strings, numbers and booleans. It uses 'ref()' under the hood.
    - doesn't use `.value` and can't be reassigned
  - `ref()`
    - can take objects and primitives
    - has a `.value` property for reassigning

- most vue developers stick to using `ref()`

usage example:
- modified JobListings to use a reactive() state object to hold jobs instead
  - also has an isLoading field
- modified onLoading and template
``` JS
import { reactive } from 'vue';
// other code
const state = reactive({
  jobs: [],
  isLoading: true
});

// other code

onMounted(async () => {
  try{
    const response = await axios.get('http://localhost:5000/jobs');
    // jobs.value = response.data;
    state.jobs = response.data;
  } catch(error){
    console.error('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});
```

```JS 
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"/>
</div>
```

# 22. Setting up a loading spinner using Vue Spinner
- to install
``` shell
npm i vue-spinner
```
## importing and rendering PulseLoader
- imported `PulseLoader` from `Vue-Spinner/src/PulseLoader.js`
- added v-if and v-else to display spinner or the jobs
```JS JobListings.vue
<!-- Show loading spinner while loading is true -->
<div v-if="state.isLoading" class="text-center text-gray-500 py-6">
  <PulseLoader />
</div>
<!-- Show job listing when done loading -->
<div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"/>
</div>
``` 

# 23. Displaying data in JobView
- imported Axios, PulseLoader and reactive and useRoute
- we declare a constant for route
- we declare a constant for the `jobId` with the param value of the id of the page
- we declare a reactive state which holds the job and isLoading fields
- we specify an async function in onMounted to get the job data
- we use v-if and v-else to display the spinner or render the data
- we changed the hard coded values to reference the state fields instead

```Vue vies/JobView.vue
<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import axios from 'axios';

const route = useRoute();

const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true
});

onMounted(async() => {
  try{
    const response = await axios(`http://localhost:5000/jobs/${jobId}`)
    state.job = response.data;
  } catch(error){
    console.log('Error fetching job', error);
  } finally {
    state.isLoading = false;
  }
});
</script>
```

# 24. BackButton Component
- changed href to go to '/job'
- changed the font awesome icon to `pi pi-arrow left`
- copied the code over to `components/BackButton.vue`
- imported and displayed in `views/JobView.vue`

# 25. Proxying
- specified a proxy in `vite.config.js`
``` js vite.config.js
server: {
  // other code
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```
- modified get urls to `/api/`/

# 25. Add Job Page
- copied over the HTML from the design to `views/AddJobView.vue`
- added a route to `routes/index.js`
``` js
{
  path: '/jobs/add',
  name: 'add-job',
  component: AddJobView
},
```

# 26. form data
- using a reactive state for this
```JS AddJobView.vue
import { reactive } from 'vue';
const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '' 
  }
});
```
- we then use `v-model="form.type"` (for example) to bind the form inputs to the form state
- we then added a `handleSubmit` method and called this on the form using `@submit.prevent="handleSubmit"`
- the handleSubmit method uses an async callback in which an axios post request is sent
``` JS AddJobView.vue
const handleSubmit = async() => {
  const newJob = {
    title: form.title,
    type: form.type,
    location: form.location,
    description: form.description,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone
    }
  }
  try{
    const response = await axios.post(`/api/jobs`, newJob);
    // @ todo - show toast
    router.push(`/jobs/${response.data.id}`);
  } catch(error){
    // @ todo - show toast
    console.log('error submitting new job', error);
  }
}
```

# 27. Toast popup display 
- displayed when submitting a post, put or delete request to the server
- to install:
``` shell
npm i vue-toastification@next
```
## usage
- imported package into main.js
- we import the styles as well.
```JS main.js
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
```
- we then specify to use it as middleware in the app
``` JS main.js
app.use(Toast);
```
## displaying Toast in AddJobView
- added following lines to display the toast when the Job has been added successfully or there was an error
``` JS view/AddJobView.vue
import { useToast } from 'vue-toastification';

// other code
try{
    const response = await axios.post(`/api/jobs`, newJob);
    toast.success('Job added successfully');
    router.push(`/jobs/${response.data.id}`);
  } catch(error){
    console.log('error submitting new job', error);
    toast.error('Job was not added');
  }
```

# 28. Job Delete Request 
- imported `useRouter` and `useToast`
- initialized instances for them.
- 
``` JS JobView.vue
const router = useRouter();
const toast = useToast();
```
- added `handleDelete` async function to `JobView.vue`
  - displays a confirmation popup to confirm user wants to delete the job
  - if yes:
    - sends delete request with axios
    - trigger toast display with success message
    - reroutes to the jobs page
  - if there's an error we display the job wasn't deleted and log the error.
``` JS JobView.vue
const handleDelete = async() => {
  try{
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if(confirm) {
      await axios.delete(`/api/jobs/${jobId}`);
      toast.success('Job deleted successfully');
      router.push('/jobs');
    }
  } catch(error){
    console.log('error deleting job', error);
    toast.error(`Job not deleted`, );
  }
};
```
- bounded the delete button this this method.




left vid at: 02:37:25

