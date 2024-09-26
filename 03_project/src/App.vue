<script setup>
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Hero.vue';
  import HomeCards from './components/HomeCards.vue';
  import JobListings from './components/JobListings.vue';
</script>

<template>
  <Navbar />
  <Hero title="Test Title" subTitle="Test Subtitle"/>
  <HomeCards />
  <JobListings limit="6"/>

  <section class="m-auto max-w-lg my-10 px-6">
    <a
      href="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
</template>