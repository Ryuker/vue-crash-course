// Loads a global vue instance that handled the toast notification display
import type { App } from 'vue';

// @ts-ignore
import Toast from "vue-toastification/dist/index.mjs";
import 'vue-toastification/dist/index.css';


export default (app: App ) => {
    app.use(Toast);
}