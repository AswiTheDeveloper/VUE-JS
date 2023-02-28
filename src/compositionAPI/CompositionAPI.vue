<template>
  <main>
    <h1>{{ name }}</h1>
    <h3>{{ count }} <button @click="setCounter">inc</button></h3>
    <h2>{{ learn }} {{ user }} {{ role }}</h2>
    <h2>{{ state.user }} : {{ state.role }}</h2>
    <tempConverter/>
  </main>
</template>

<script>
import CounterMixin from "../mixins/counter";
import tempConverter from "./tempConverter.vue";
import { ref, reactive } from "vue";
export default {
    name: "CompositionAPI",
    setup() {
        // ref
        const learn = "ref";
        let user = ref("ASWI");
        let role = ref("Frontend");
        user.value = "ALEX";
        let isLoggedIn = ref(false);
        console.log(isLoggedIn);
        isLoggedIn.value = true;
        console.log({ isLoggedIn });
        console.log(user, "compositionAPI,REF");
        // reactive
        let state = reactive({
            user: "Jessica",
            role: "UI",
        });
        return {
            learn,
            user,
            role,
            state,
        };
    },
    data() {
        return {
            name: "CompositionAPI",
        };
    },
    mixins: [CounterMixin],
    mounted() {
        console.log(this.user);
    },
    components: { tempConverter }
};
</script>

<style scoped>
h1 {
  background-color: lightgreen;
  color: white;
  font-size: 3rem;
  margin: 2rem;
}
</style>