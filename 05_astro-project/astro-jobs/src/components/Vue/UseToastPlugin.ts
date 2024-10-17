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