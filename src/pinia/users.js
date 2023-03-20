import { defineStore } from 'pinia';

export default defineStore('userFromDb', {
    state: () => ({
        userLoggedIn: false,
        userData: 'no user logged in',
    })
})