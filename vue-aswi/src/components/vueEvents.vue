<template lang="">
<main>
<h1>VUE-EVENTS</h1>
<h2> {{name}} </h2>
<button @click="nameChange">change</button>

<br>
<h3>{{count}} </h3>
<p> <button @click="count+=1">Inc 1</button> <button @click="count+=5">Inc 5</button> <button @click=" count-=1">Dec 1</button> <button @click=" count-=5">Dec 5</button></p>


</main>
</template>
<script>
export default {
    data() {
        return {
            name: 'ASWI',
            count: 0,
        }
    },
    methods: {
        nameChange() {
            if (this.name == 'ASWI') this.name = 'DEVELOPER';
            else this.name = 'ASWI';
        }
    }

}
</script>

<style scoped>
main {
    margin: 1rem;
}

button {
    font-size: 1rem;
    padding: .2rem .5rem;
    border-radius: .4rem;
    font-weight: normal;
    border: none;
    transition-duration: 1s;
}

button:hover {
    transform: scale(1.09);
}
</style>