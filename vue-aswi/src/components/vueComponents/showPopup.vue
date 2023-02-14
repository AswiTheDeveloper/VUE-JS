<template>
    <main>

        <h2>Hey, How are you?</h2>
        <vueButton name="close" id="risk" @click="$emit('close')" />

    </main>
</template>

<script>
import vueButton from './button.vue'
export default {
    name: 'showPopup',
    components: {
        vueButton,
    }

}
</script>

<style scoped>
main {
    width: 30rem;
    height: 8rem;
    text-align: center;
    background-color: lightblue;
    color: white;
    padding: 1rem;
    border-radius: .9rem;
    margin: 1rem;
}

button {
    margin: 1rem 0;
}
</style>