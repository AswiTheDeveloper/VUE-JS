import { createApp } from "vue";
import { createPinia } from "pinia";
import App from './App.vue';
import router from "./routes/index";
import VeeValidatePlugin from './vee-validate/veeValidate';

import { auth } from "./firebase/firebase";
let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);
        app.use(createPinia());
        app.use(VeeValidatePlugin);
        app.use(router);
        app.mount('#App');
    }
})
