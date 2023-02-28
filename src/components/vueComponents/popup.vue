<template>
    <main>
    <showPopup v-show="show" @close="close" />

        <vueButton @click="show = true" :name="buttonText" :disabled="show" id="safe" />
    </main>
</template>

<script >
import showPopup from './showPopup.vue';
import vueButton from './button.vue';
export default {
    name: 'popUp',
    data() {
        return {
            show: false,
            buttonText: 'Show',
        }
    },
    components: {
        showPopup, vueButton,
    },
    methods: {
        close(name) {
            this.show = false;
            alert(name);
        }
    },
    computed: {

    }
}

</script>

<style scoped>

</style>