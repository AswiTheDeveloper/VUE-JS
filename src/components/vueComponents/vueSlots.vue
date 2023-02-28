<template>
    <main>
        <h2>SLOTS</h2>
        <header>
            <slot name="header"></slot>
        </header>
        <section>
            <slot>default</slot>
        </section>
        <footer>
            <slot name="footer"></slot>
        </footer>
</main>
</template>

<script>









export default {
    name: 'vueSlot',
}
</script>

<style scoped>
main {
    min-width: 20rem;
    max-width: auto;
    padding: 1rem;
    margin: .4rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

ul {
    width: 80%;
    margin: auto;
}

section,
header,
footer {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

}</style>