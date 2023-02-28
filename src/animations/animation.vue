<template>
  <main>
    <h1>Animations</h1>

    <section>
        <button type="button" @click="flag = !flag">Toggle</button>
      <transition name="fade" mode="out-in">
        <h2 v-if="flag" key="main">VUE DEVELOPER:{{ flag.toString().toUpperCase() }}</h2>
        <h2 v-else key="sec">REACT DEVELOPER</h2>
      </transition>
    </section>

    <button type="button" @mouseenter="flag=!flag" @mouseleave="flag=!flag">Hover it to Zoom</button>
    <article  :class="{zoom:flag}">
        <h2>VUE JS</h2>
    </article>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AnimationsVue",
  setup() {
      let flag = ref(false);
    

    return {
      flag,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: lightgreen;
  font-size: 3rem;
  color: white;
  margin: 2rem;
}
section {
  width: 20rem;
  height: 10rem;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 3s linear;
}
.fade-leave-to {
  transition: all 3s linear;
  opacity: 0;
}
article{
    border-radius: .6rem;
    border: 3px solid red;
    padding: 1rem  3rem;

}
.zoom{
    /* animation: ZOOM 3s 1; */
    transform: scale(1.5,2);
    transition: all 5s linear;
}

@keyframes ZOOM{
    to{
        transform: scale(1.5,2);
        margin: .5rem;
    }
}
</style>