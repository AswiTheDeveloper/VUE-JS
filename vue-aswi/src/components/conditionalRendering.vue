<template>
    <main>
        <h1>Conditional Rendering</h1>

        <p v-if="condition">condition is set to be:{{ condition }}</p>

        <h3 v-if="number == 0">THE VALUE IS ZERO</h3>

        <h3 v-else-if="number > 0">THE VALUE IS POSITIVE</h3>
        <h3 v-else-if="number < 0">THE VALUE IS NEGATIVE</h3>
        <h3 v-else>THE VALUE IS INVALID</h3>


        <section v-if="display">
            <h2>ASWI</h2>
            <h1>Vue</h1>
        </section>

        <section>
            <h1>V-show vs v-if </h1>
            <p>V-IF hides both content and space</p>
            <p>V-SHOW hides only content and space remains same</p>
        </section>

        <h2 v-show="showMe">V-SHOW</h2>
        <h2 v-if="showMe">V-IF</h2>

    </main>
</template>


<script>
export default {


    data() {
        return {
            condition: false,
            number: 'not',
            display: true,
            showMe: true,
        }
    }
}
</script>


<style scoped>
main {
    width: 100%;
    height: auto;
    padding: 3rem;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

section {
    border: 1px solid white;
    padding: 1rem 4rem;
}
</style>