import { createRouter, createWebHistory } from "vue-router";
import vueForm from '../components/vueForm.vue';
import App from '../App.vue';
import bionicReading from '@/bionicReading/bionicReading';
import HomePage from '../components/HomePage.vue';
import JsonPosts from '../utils/Axios.vue';


const routes = [

    {
        path: '/form',
        component: vueForm,
    },
    {
        path: '/',
        component: App,
    },
    {
        path: '/bionicReading',
        component: bionicReading,
    }, {
        path: '/homePage',
        component: HomePage,
    },
    {
        path: '/jsonPosts',
        component: JsonPosts,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;