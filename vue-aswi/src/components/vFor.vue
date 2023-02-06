<template>
    <main>
        <h1>V-FOR</h1>


        <h2>V-FOR</h2>
        <ol>
            <li v-for="(name, index) in list" :key="name">{{ name }} {{ index+ 1 }}</li>
        </ol>


        <section v-for="name in cinema" :key="name">
            <h2>{{ name.name }}</h2>
            <h4 v-for="movie in name.movies" :key="movie">{{ movie }}</h4>
        </section>


    </main>
</template>



<script>
export default {
    data() {
        return {
            list: ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'],
            cinema: [
                {
                    name: 'De Caprio',
                    movies: ['Departed', 'Catch Me If You Can', 'Inception']

                },
                {
                    name: 'Christian Bale',
                    movies: ['Batman', 'The Prestige']
                }
            ]

        }
    }

}

</script>





<style scoped>
main {
    background-color: lightgreen;
    color: white;
    padding: 2rem 4rem;
}

ol {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}

section {
    margin: 1rem;
    border: 1px solid white;
    padding: 1rem;
    border-radius: 1rem;
}
</style>