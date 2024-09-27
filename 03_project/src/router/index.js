import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import AddJobView from "@/views/AddJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobsView,
      // {
      //   path: '/add-job',
      //   name: 'Add Job',
      //   component: AddJobView
      // }
    },
  ]
});

export default router;