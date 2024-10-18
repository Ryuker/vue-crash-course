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