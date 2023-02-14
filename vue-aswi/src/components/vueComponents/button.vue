<template>
    <button>{{ name }}</button>
</template>

<script>
export default {
    name: 'vueButton',
    props: {
        name: String,
    }

}
</script>

<style  scoped>
button {
    border: none;
    padding: .5rem 1rem;
    background-color: lightblue;
    color: white;
    border-radius: .5rem;
    transition-duration: 1s;
    font-weight: bold;
}

button:hover {
    translate: scale(1.1);
}

#safe {
    background-color: lightgreen;
}

#warn {
    background-color: yellowgreen;
}

#risk {
    background-color: red;
}
</style>