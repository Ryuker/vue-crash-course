<script setup>
import { useToast } from "vue-toastification/dist/index.mjs";

const toast = useToast();


const displayToast = () => {
  console.log('display toast');
  toast.success('Job deleted successfully');
}

</script>

<template>
  <button class='btn' @click="displayToast">Display Toast</button>
</template>