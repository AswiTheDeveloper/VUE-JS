<template>
    <main>
        <h1>Vue Methods</h1>
        <h2>Add {{ 3+4 + 5 }}</h2>
        <h2> add method- {{ add(4,5,3) }}</h2>
        <h3>Multiply {{ mutliply(5) }} </h3>





    </main>
</template>


<script>


export default {
    data() {
        return {
            baseMultiplier: 10
        }
    },
    methods: {
        add(a, b, c) {
            return a + b + c
        },
        mutliply(a) {
            return this.baseMultiplier * a
        }
    }
}
</script>

<style>

</style>