<template>
    <main>
        <h3 v-for="name in names" :key="name">
            <slot :fname="name.fname" :lname="name.lname"></slot>
        </h3>
</main>
</template>

<script>




export default {
    name: 'nameList',
    data() {
        return {
            names: [
                {
                    fname: 'Bruce',
                    lname: 'wayn',
                },
                {
                    fname: 'Clark',
                    lname: 'Kent',
                },
                {
                    fname: 'Alex',
                    lname: 'Aloe',
                }
            ]
        }
    },
}
</script>

<style scoped>
h3 {
    margin: .5rem;
}
</style>