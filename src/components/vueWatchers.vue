<template lang="">
   <main>
    <h1>Vue Watchers</h1>
<h2>Volume Control(0-20)</h2>
<h1>{{volume}}</h1>
<p><button @click="volume+=2">Inc</button></p>

<button @click="volume-=2">Dec</button>
<h2>movie: <input type="text" v-model.lazy="movie.name" /></h2>
<h3>Actor: <input type="text" v-model.lazy="movie.actor" /></h3>
<h4><button @click="movieList.push('wonder woman')">Add more movies</button></h4>

   </main>
</template>
<script>
export default {
    data() {
        return {
            volume: 0,
            movie: {
                name: 'immediate',
                actor: 'deep'
            },
            movieList: ['spider man', 'superman']
        }
    },
    methods: {

    },
    watch: {
        volume(newValue, oldValue) {
            if (newValue < 0) this.volume = 0;
            if (newValue > 20) this.volume = 20;

            if (newValue > 15 && oldValue < newValue) {
                alert('listening to higher volume for a long time may damage your hearing..!')
            }
        },
        movie: {
            handler(value) {
                console.log('calling API with movie: ' + value.name, value.actor)
            },
            deep: true,
            immediate: true,
        },
        movieList: {
            handler(value, oldValue) {
                console.log('movie List', oldValue);
                console.log('updated movie List', value);
            },
            deep: true,
        }
    },

}
</script>
<style lang="">
    
</style>