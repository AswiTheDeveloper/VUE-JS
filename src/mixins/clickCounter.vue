<template>
  <main>
    <h1>Mixins (Code Reusability)</h1>
    <button @click="setCounter">Counter:{{ count }}</button>
  </main>
</template>

<script>
import counterMixin from './counter.js';
export default {
        name:'ClickCounter',
        mixins:[counterMixin]
    }
</script>

<style scoped>
h1{
    background-color: lightgreen;
    color: white;
    font-size: 2.5rem;
}
</style>