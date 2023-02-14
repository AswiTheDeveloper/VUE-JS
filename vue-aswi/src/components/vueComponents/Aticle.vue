<template>
    <main>
        <h2>Provide and Inject (global state management without prop drilling..)</h2>
        <h1>userName:{{ user }}, password:{{ pass }}</h1>
        <h2>Article Component</h2>
        <h3>{{ title }}</h3>
        <h4>Likes-{{ likes }}</h4>
        <h3>Published:{{ isPublished?'YES': 'NO' }}</h3>
        <p>binds ID attribute to the component if it return single element.(ID,CLASS are Non-prop attributes)</p>
    </main>
</template>

<script>
export default {
    name: 'ArticleComponent',
    props: {
        title: {
            type: String,
            required: true,
            default: 'DEFAULT TITLE'
        },
        likes: Number,
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    inject: ['user', 'pass']
}
</script>

<style scoped>
main {
    margin: 2rem 1rem;
    border-radius: 1rem;
    padding: 1rem;
}

#redArticle {
    background-color: red;
    color: white;

}

#greenArticle {
    background-color: lightgreen;
    color: white;

}
</style>