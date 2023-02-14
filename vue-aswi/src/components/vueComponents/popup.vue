<template>
    <main>
        <showPopup v-show="show" @close="close" />
        <vueButton @click="show = true" :name="buttonText" id="safe" />
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
            buttonText: '',
        }
    },
    components: {
        showPopup, vueButton,
    },
    methods: {
        close() {
            this.show = false;
        }
    },
    computed: {
        buttonText() {
            if (this.show)
        }
    }
}

</script>

<style scoped>

</style>