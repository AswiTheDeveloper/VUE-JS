import { createApp } from "vue";
import { createPinia } from "pinia";
import App from './App.vue';
import router from "./routes/index";
import VeeValidatePlugin from './vee-validate/veeValidate'

const app = createApp(App);
app.use(createPinia());
app.use(VeeValidatePlugin);
app.use(router);
app.mount('#App');

