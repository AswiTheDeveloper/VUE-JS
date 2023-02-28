<template>
  <main>
    <h2>Main Block</h2>
    <SectionBlock v-if="visible" />
    <button @click="visible = !visible">{{ text }}</button>
  </main>
</template>

<script>
import SectionBlock from "./section.vue";
export default {
  name: "MainBlock",
  components: {
    SectionBlock,
  },
  data() {
    return {
      visible: false,
      text: "",
    };
  },
  watch: {
    visible: {
      handler() {
        if (this.visible) {
          this.text = "Hide Section";
        } else {
          this.text = "Show Section";
        }
      },
      immediate: true,
    },
  },

  beforeCreate() {
    console.log("beforecreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforemount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
h2 {
  margin: 1rem;
  padding: 1rem;
  border: 2px solid lightgreen;
  font-family: fantasy;
  letter-spacing: 0.3rem;
}
</style>