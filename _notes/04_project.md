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

