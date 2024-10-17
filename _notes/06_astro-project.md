# Astro Version of the Job Listings App
- uses vue for dynamic functionality
- made to check differences with Nuxt
- uses SSR functionality of Astro

# Todo:
[v] install Astro, setup new project
[v] install and configure Tailwind
[v] setup default layout
  [v] styling
  [] view-transitions to support toast display

[v]  components:
  [v] Navbar
    [] links
    [v] active link background color
    [v] prevent background on logo if it's active link
  [v] Hero
  [v] HomeCards
    [v] Card
  [v] JobListing
    [v] props
    [v] truncated description (vue component)
      [v] display full description on toggle
  [v] JobListings
    [v] load jobs into array from fetch call
    [v] display Job Listing using map function
    [v] ViewAllJobs button prop and condiditional display
  [v] BackButton
    [v] icon
  [v] delete button (vue component because of the toast functionality)
      [v] submit delete request
      [v] reroute to page
      [v] test functionality
    

  [v] ToastDisplay
    [v] display on every page
    [] persist during view transition

  [] Add Job Form (vue component)
    [v] content and styling
    [v] submit post request
    [v] redirect to newly created job page when successfull
  [v] Edit Job Form (vue component)
    [v] content and styling
    [v] populate form with original job data
    [v] submit put request
      [v] test
    [v] redirect to newly updated job page when successfull

[v] setup pages
  [v] jobs page
    [v] skeleton
    [v] styling
  [v] add jobs page
    [v] skeleton
    [v] styling
  [v] dynamic job page
    [v] skeleton
    [v] styling
    [v] fetch data from API and display
  [v] edit job page
    [v] skeleton
    [v] styling

[v] setup API routes to get data
  [v] GET request handler for Dynamic Job ID
    [v] fetch data from external API or Astro collections?
    [v] serve data to GET request 
  [v] POST request hander
  [v] PUT request handler (dynamic page id)
    [v] connect to external api
    [] test
  [v] DELETE request handler (dynamic page id)
    [v] connect to external api
    [v] test


[] install and configure:
  [v] json-server
  [v] toastification
     - configured using global app load of vue
     - plugin is a bit iffy, needed to do some workaround to get it working
  [v] prime icons
    ! Unable to load this using astro.config so I loaded into the layout instead



ViewTransitions without using component : [link](https://astro.build/blog/future-of-astro-zero-js-view-transitions/)
ViewTransitions with component: [link](https://docs.astro.build/en/guides/view-transitions/#astrobefore-swap)

## known issues:
[] Vue plugins get loaded for each vue components instance
  - this is rather excessive
  [] for vue-toastification this results in multiple dives being created for each component 
  [] each vue component now loads vue-toastification



**how to export vue app instance**
  1. create `/pages/_app-vue.ts`
  2. add the following code
    - we need to create the App manually so we can export it afterwards. 
      - This is good for global configuration in general
``` TS 
// Loads a global vue instance that handled the toast notification display
import type { App } from 'vue';
import { createApp } from 'vue';

// @ts-ignore
import Toast from "vue-toastification/dist/index.mjs";
import 'vue-toastification/dist/index.css';

const app = createApp({});

// export the app instance object so we can access it inside components
export { app };

// runs for each vue instance so don't register plugins here
// export default (app: App ) => {
//     // app.use(Toast);
//     // console.log('registering toast plugin for: ', app); // currently loads the plugin for each component instance
// }
export default (app: App ) => {
    // app.use(Toast);
    // console.log('registering toast plugin for: ', app); // currently loads the plugin for each component instance
}
```

**How to register vue plugins to the vue instance**
- since each component is it's own island...
  - we have to add the plugin as middleware for each component
  - so I made a script for this `UseToastPlugin.ts` which I import into the component
  - this script loads the plugin to the app instance
``` TS
// Configure Toast plugin to be available to app
import { app } from "@pages/_app-vue";

// @ts-ignore
// import Toast from "vue-toastification";
import Toast from "vue-toastification/dist/index.mjs";
import "vue-toastification/dist/index.css";

// configure to use plugin
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
```
- after importing this we can then access the plugin features as usual since it's not used in the app instance
example:
``` JS
import "./UseToastPlugin";

import { useToast } from "vue-toastification/dist/index.mjs";

const toast = useToast();


const displayToast = () => {
  console.log('display toast');
  toast.success('Job deleted successfully');
}
```


**Vanilla DeleteBtn (not using):**
```JS
<!-- <script>
  // @ts-ignore
import { useToast } from "vue-toastification/dist/index.mjs";
const deleteBtn = document.getElementById('deleteBtn');

const toast = useToast();

if(deleteBtn){
  deleteBtn.addEventListener('click', async() => {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if(confirm) {
      const jobId = getSlug();

      const api_url = new URL(`/api/jobs/${jobId}`, window.location.origin);

      console.log(api_url);

      try {
        const response = await fetch(api_url, {
          method: 'DELETE'
        });
        const deleted = response.json();
        toast.success('Job deleted successfully');
        // window.location.href = `/jobs/`; // reroute to jobs page
      } catch(error){
        console.log('error deleting job', error);
        toast.error(`Job not deleted`, );
      }
    }
  });

  function getSlug () {
    const pathArray = window.location.pathname.split( '/' );
    const slug = pathArray[pathArray.length-1];

    return slug;
  }
}

</script> -->
```