import { defineStore } from 'pinia';

export default defineStore('userInfo', {
    state: () => ({
        namePinia: 'aswi',
        role: 'frontend',
    }),
    getters: {
        isAdmin(state) {
            return state.namePinia === 'aswi';
        }
    }
})