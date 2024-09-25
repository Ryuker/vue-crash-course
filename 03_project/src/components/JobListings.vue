<script setup>
import JobCard from './JobCard.vue';
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobCard 
            type="Full-Time"
            position="Senior Vue Developer"
            description="We are seeking a talented Front-End Developer to join our team
                in Boston, MA. The ideal candidate will have strong skills in
                HTML, CSS, and JavaScript..."
            salary="$70 - $80K / Year"
            location="Boston, MA"
            link="https://bol.com"
          />
          <JobCard 
            type="Remote"
            position="Front-End Engineer (Vue)"
            description="Join our team as a Front-End Developer in sunny Miami, FL. We
                are looking for a motivated individual with a passion..."
            salary="$70K - $80K / Year"
            location="Miami, FL"
            link="https://amazon.com"
          />
          <JobCard 
            type="Part-Time"
            position="Vue.js Developer"
            description="Are you passionate about front-end development? Join our team in
                vibrant Brooklyn, NY, and work on exciting projects that make a
                difference..."
            salary="$70K - $80K / Year"
            location="Brooklyn, NY"
            link="https://paypal.com"
          />
        </div>
      </div>
    </section>
</template>