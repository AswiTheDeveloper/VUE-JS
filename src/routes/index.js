import { createRouter, createWebHistory } from "vue-router";
import vueForm from '../components/vueForm.vue';
import App from '../App.vue';
import bionicReading from '@/bionicReading/bionicReading';
import HomePage from '../components/HomePage.vue';
import JsonPosts from '../utils/Axios.vue';
import vueFormRegister from '../components/vueFormRegister.vue';
import StorageCloud from '../firebase/StorageCloud.vue';
// Authentication
import useUserFromDbStore from '../pinia/users';



const routes = [
    {
        name: 'storage',
        path: '/storage',
        component: StorageCloud,
        meta: {
            requireAuth: true,
        }
    },
    {
        name: '404',
        path: '/:catchAll(.*)*',
        redirect: { name: 'home' }
    },
    {
        name: 'signUp',
        alias: '/register',
        path: '/signUp',
        component: vueForm,
    },
    {
        name: 'signIn',
        path: '/signIn',
        component: vueFormRegister,
        // beforeEnter: (to, from, next) => {
        //     console.log('from', from);
        //     console.log('to', to);
        //     console.log('next', next);
        // }
    },
    {
        name: 'home',
        path: '/',
        component: App,
        meta: {
            requireAuth: false,
        }
    },
    {
        name: 'error',
        path: '/error',
        redirect: { name: 'home' }
    },

    {
        name: 'bionicReading',
        path: '/bionicReading',
        component: bionicReading,
        meta: {
            requireAuth: true,
        }
    }, {
        name: 'homePage',
        path: '/homePage',
        component: HomePage,
        meta: {
            requireAuth: false,
        }

    },
    {
        name: 'jsonPosts',
        path: '/jsonPosts',
        component: JsonPosts,
        meta: {
            requireAuth: true,
        }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    console.log('global guard', to.meta);
    if (!to.meta.requireAuth) {
        next();
        return;
    }
    const store = useUserFromDbStore();
    if (store.userLoggedIn) {
        next();
    }
    else {
        next({ name: 'signIn' })
    }
})

export default router;