<template>
  <h1>{{ name }}</h1>
  <img src="./assets/logo.png" alt="">
  <HomePage age={{ 23 }} name="ASWI" />
  <vueMethods />
  <vueEvents />
  <vueForm />
</template>

<script>
import HomePage from './components/HomePage.vue';
import vueMethods from './components/vueMethods.vue';
import vueEvents from './components/vueEvents.vue';
import vueForm from './components/vueForm.vue';
export default {
  name: "App",
  data() {
    return {
      name: 'ASWI'
    };
  },
  components: { HomePage, vueMethods, vueEvents, vueForm }
}
</script>

<style>

</style>
