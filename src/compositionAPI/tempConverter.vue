<template>
  <main>
    <input v-model="c" type="number" @change="setC" />
    <h2>Celcius: {{ c }}</h2>
    <h2>Fahrenheit: {{ Math.round(f) }}</h2>
  </main>
</template>

<script>
export default {
  name: "tempConverter",
  data() {
    return {
      c: 0,
      f: 32,
    };
  },
  methods: {
   
    },
    watch: {
        c(value) {
            if (value == '') this.c = 0;
            this.f = value * (9 / 5) + 32;
    }
  }

};
</script>

<style scoped>
input {
  margin: 0.4rem;
  padding: 0.3rem;
}
</style>