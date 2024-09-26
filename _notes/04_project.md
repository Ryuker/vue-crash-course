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

## Job Card Component
- added `components/JobCard.vue`
- copied over the JobCard HTML from the design in the JobCard template tag
- imported card into `JobListings.vue`
- specified props in JobCard to dynamically render data
  - and rendered this data inside the component in the proper places
- specified JobCard attributes in JobListings


## Define Props is Compiler Macro
- apparantly in Vite there's no need to import defineProps anymore in a vue project
  - it's a compiler macro that just handles the import
  - so I removed it from the components.

# 06. All Jobs Section
- this isn't really component worthy imo since it's just one section
  - so I just copied over the HTML from the design and changed the link

# 07. Importing Jobs mock data from JSON file  
- 

left vid at: 1:05:17

