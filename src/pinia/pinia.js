import { defineStore, } from 'pinia';
import { auth, userCollection } from '@/firebase/firebase';

export default defineStore('userInfo', {
    state: () => ({
        namePinia: 'aswi',
        role: 'frontend',
    }),
    getters: {
        isAdmin(state) {
            return state.namePinia === 'aswi';
        }
    },
    actions: {
        async register(value) {

            let userCred = await auth.createUserWithEmailAndPassword(
                value.email,
                value.password
            );

            await userCollection.doc(userCred.user.uid).set({
                name: value.name,
                age: value.age,
                country: value.selectCountry,
                email: value.email,
            });

        },
        async authenticateUser(value) {
            let userInfo = await auth.signInWithEmailAndPassword(value.signUpEmail, value.signUpPassword);
            console.log(userInfo);
        },
        async signOut() {
            console.log('signing out', auth.currentUser.multiFactor.user.email);
            await auth.signOut();
        }
    }
})