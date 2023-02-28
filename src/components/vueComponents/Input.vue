<template>
    <input :type="type" v-model="name">
</template>

<script>
export default {
    name: "vueInput",
    data() {
        return {
            name: '',
        }
    },
    props: {
        type: {
            type: String,
            default: "text",
        },
    }
}
</script>

<style scoped>
input {
    padding: .5rem;
    border-radius: .5rem;
    outline: none;
    border: 1px solid lightgray;
}
</style>