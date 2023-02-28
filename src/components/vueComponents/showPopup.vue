<template>
    <main>

        <h2>Hey, How are you?</h2>
        <vueInput v-model="check"/>
        <vueButton name="close" id="risk" @click="$emit('close', check)" />

    </main>
</template>

<script>
import vueButton from './button.vue';
import vueInput from './Input.vue';
export default {
    name: 'showPopup',

    components: {
        vueButton,vueInput,
    },
    data() {
        return {
            check: '',
        }
    },
    emits: {
        close: (name) => {
            if (!name) return false;
            else return true;
        }
    },
   

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
input {
    margin: 0 1rem;
    padding: .4rem;
}
</style>