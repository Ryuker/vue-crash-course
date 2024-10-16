import type { App } from 'vue';
import * as vt from 'vue-toastification';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default (app: App) => {
  app.use(Toast);
};