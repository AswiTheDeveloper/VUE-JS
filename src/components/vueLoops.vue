<template>
    <main>
        <h1>VUE LOOPS</h1>
        <header>
            <h2 v-for="(name, index) in names" :key="index">
                {{ name }}
                <hr>
            </h2>
        </header>


        <section>
            <p v-for="(value, key, index) in info" :key="index">{{ key }}: {{ value }} </p>
        </section>



        <form action="">
            <section v-for="(name, index) in developers" :key="index">
                <h1>{{ name }}</h1>
                <input type="text" placeholder="last name">

                <hr>
            </section>
            <button @click="shuffle">Shuffle</button>

        </form>

        <section v-for="(name, index) in developers" :key="index">
            <h2 v-if="developers[index] == 'Aswi'"> {{ name }}</h2>
        </section>
    </main>
</template>

<script>

export default {
    data() {
        return {
            names: ['JavaScript', 'React', 'Vue Js'],
            info: {
                name: 'ASWI',
                role: 'Developer',
                place: 'Vizag'
            },
            developers: ['Aswi', 'Alex', 'Aloe', 'Bruce'],
        }
    },
    methods: {
        shuffle(e) {
            e.preventDefault();
            alert('shuffling not working...!');
            // this.developers = _.shuffle(this.developers);

        }
    },
}

</script>

<style scoped>
hr {
    margin: 1rem 0;
    width: 20vw;
}
</style>