<template>
  <Hero title="Become a Vue Dev" subTitle="Find the Vue job that fits your skills and needs" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>