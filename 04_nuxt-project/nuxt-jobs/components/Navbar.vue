<script setup>
import logo from '@/assets/img/logo.png';
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <NuxtLink to="/" class="logo flex flex-shrink-0 items-center mr-4">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </NuxtLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <NuxtLink to="/"
                class="hover:bg-gray-900 hover-text-white text-white rounded-md px-3 py-2">
                Home
              </NuxtLink>
              <NuxtLink to="/jobs"
                class="hover:bg-gray-900 hover-text-white text-white rounded-md px-3 py-2">
                Jobs
              </NuxtLink>
              <NuxtLink to="/jobs/add"
                class="hover:bg-gray-900 hover-text-white text-white rounded-md px-3 py-2">
                Add Job
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .router-link-exact-active:not(.logo) {
    @apply bg-green-900;
  }
</style>