<template>
  <main>
    <h1>{{ name }}</h1>
    <h2>{{ username }},{{ password }}</h2>
    <img src="./assets/logo.png" alt="" />
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
    <ArticleComponent
      id="redArticle"
      title="Article Title"
      :likes="5957"
      :isPublished="true"
    />
    <ArticleComponent
      id="greenArticle"
      title="Article Title"
      :likes="5957"
      :isPublished="true"
    />
    <popUp />

    <vueSlots>
      <h1>Card Content-1</h1>
    </vueSlots>
    <vue-slots>
      <h3>Card Content-2</h3>
    </vue-slots>
    <vueSlots>
      <img
        src="https://rukminim1.flixcart.com/image/416/416/kph8h3k0/poster/e/w/4/large-adorable-cat-poster-cute-kittens-poster-cat-poster-funny-original-imag3p7tcxuzhpn2.jpeg?q=70"
        alt="cat"
      />
    </vueSlots>
    <vueSlots>
      <ul>
        <li>Slots are more powerful than props</li>
        <li>We can control child content from Parent</li>
      </ul>
    </vueSlots>

    <vueSlots>
      <template v-slot:header>
        <h3>HEADER ONE</h3>
      </template>
      <template v-slot:default>
        <img
          src="https://rukminim1.flixcart.com/image/416/416/kph8h3k0/poster/e/w/4/large-adorable-cat-poster-cute-kittens-poster-cat-poster-funny-original-imag3p7tcxuzhpn2.jpeg?q=70"
          alt="cat"
        />
      </template>
      <template v-slot:footer>
        <h4>Vue Slots with multiple Slots(named Slots)</h4>
      </template>
    </vueSlots>

    <vueSlots>
      <template v-slot:header>
        <h3>HEADER TWO</h3>
      </template>
      <template v-slot:default>
        <img
          src="https://rukminim1.flixcart.com/image/416/416/kph8h3k0/poster/e/w/4/large-adorable-cat-poster-cute-kittens-poster-cat-poster-funny-original-imag3p7tcxuzhpn2.jpeg?q=70"
          alt="cat"
        />
      </template>
      <template v-slot:footer>
        <h4>Vue Slots with multiple Slots(named Slots)</h4>
      </template>
    </vueSlots>
    <nameList>
      <template v-slot:default="slotProps">
        {{ slotProps.fname }} {{ slotProps.lname }}
      </template>
    </nameList>
    <nameList>
      <template v-slot:default="slotProps">
        {{ slotProps.lname }} {{ slotProps.fname }}
      </template>
    </nameList>

    <nameList>
      <template v-slot:default="slotProps">
        {{ slotProps.fname }}
      </template>
    </nameList>

    <section>
      <button @click="activeTab = 'TabA'">Tab A</button>
      <button @click="activeTab = 'TabB'">Tab B</button>
      <button @click="activeTab = 'TabC'">Tab C</button>

      <TabA v-if="activeTab == 'TabA'" />
      <TabB v-if="activeTab == 'TabB'" />
      <TabC v-if="activeTab == 'TabC'" />
      <h2>Dynamic Component</h2>
      <h1>{{ value }} looking</h1>
      <button @click="activeTab = 'TabA'">Tab A</button>
      <button @click="activeTab = 'TabB'">Tab B</button>
      <button @click="activeTab = 'TabC'">Tab C</button>

      <component :is="activeTab" />
    </section>

    <teleport to="#portal">

      
      <TelePort />
      <JsonPosts />
      <MainBlock />
      
      <ClickCounter/>
      <CompositionAPI/>
<AnimationsVue/>
    </teleport>






  </main>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import vueMethods from "./components/vueMethods.vue";
import vueEvents from "./components/vueEvents.vue";
import vueForm from "./components/vueForm.vue";
import vOnce from "./components/vOnce.vue";
import vueWatchers from "./components/vueWatchers.vue";
import GreetUser from "./components/vueComponents/Greet..vue";
import ArticleComponent from "./components/vueComponents/Aticle.vue";
import popUp from "./components/vueComponents/popup.vue";
import vueSlots from "./components/vueComponents/vueSlots.vue";
import nameList from "./components/vueComponents/nameList.vue";
import TabA from "./components/dynamicComponents/TabA.vue";
import TabB from "./components/dynamicComponents/TabB.vue";
import TabC from "./components/dynamicComponents/TabC.vue";
import TelePort from "./components/dynamicComponents/TelePort.vue";
import JsonPosts from "./utils/Axios.vue";
import MainBlock from "./lifecyle/main.vue";
import ClickCounter from "./mixins/clickCounter.vue";
import CompositionAPI from "./compositionAPI/CompositionAPI.vue";
import AnimationsVue from "./animations/animation.vue";
export default {
  name: "App",
  data() {
    return {
      name: "ASWI",
      role: "from v-bind(:) dynamic props",
      username: "aswi111",
      password: "password",
      activeTab: "TabA",
      cValue: "",
    };
  },
  provide() {
    return {
      user: this.username,
      pass: this.password,
      test: "Hey there",
    };
  },
  inject: ["value"],
  components: {
    HomePage,
    vueMethods,
    vueEvents,
    vueForm,
    vOnce,
    vueWatchers,
    GreetUser,
    ArticleComponent,
    popUp,
    vueSlots,
    nameList,
    TabA,
    TabB,
    TabC,
    TelePort,
    JsonPosts,
    MainBlock,
    ClickCounter,
    CompositionAPI,
    AnimationsVue,
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  width: 80%;
  margin: auto;
}
h2 {
  margin: 1rem;
  background-color: lightgreen;
  color: white;
  padding: 0.5rem 1rem;
}
button {
  margin: 0 1rem;
}
</style>
