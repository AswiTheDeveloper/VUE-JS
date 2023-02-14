<template>
  <h1>{{ name }}</h1>
  <h2>{{ username }},{{ password }}</h2>
  <img src="./assets/logo.png" alt="">
  <HomePage :age="23" name="ASWI" />
  <vueMethods />
  <vueEvents />
  <vueForm />
  <vOnce />
  <vueWatchers />
  <GreetUser name="aswi" role="Frontend" />
  <GreetUser name="Aloe" role="UI" />
  <GreetUser name="Joe" role="Data Analyst" />
  <GreetUser :name="name" :role="role" />
  <ArticleComponent title="Article Title" :likes="5957" :isPublished="true" />
  <ArticleComponent id="redArticle" title="Article Title" :likes="5957" :isPublished="true" />
  <ArticleComponent id="greenArticle" title="Article Title" :likes="5957" :isPublished="true" />
  <popUp />

</template>

<script>
import HomePage from './components/HomePage.vue';
import vueMethods from './components/vueMethods.vue';
import vueEvents from './components/vueEvents.vue';
import vueForm from './components/vueForm.vue';
import vOnce from './components/vOnce.vue';
import vueWatchers from './components/vueWatchers.vue';
import GreetUser from './components/vueComponents/Greet..vue';
import ArticleComponent from './components/vueComponents/Aticle.vue';
import popUp from './components/vueComponents/popup.vue';
export default {
  name: "App",
  data() {
    return {
      name: 'ASWI',
      role: 'from v-bind(:) dynamic props',
      username: 'aswi111',
      password: 'password',

    };
  },
  provide() {
    return {
      user: this.username,
      pass: this.password,
    }
  },
  components: { HomePage, vueMethods, vueEvents, vueForm, vOnce, vueWatchers, GreetUser, ArticleComponent, popUp }
}
</script>

<style>

</style>
