<template>

    <h2>HOME PAGE</h2>
    <p>{{ name }} {{ age }}</p>
    <span v-text="channel"></span>
    <p v-html="alert"></p>
    <section v-bind:id="id">
        <h1>USER INFO</h1>
    </section>
    <button v-bind:disabled="isDisabled">BIND</button>
    <button v-bind:disabled="!isDisabled">BIND</button>
    <h3 class="head">Vue is progressive JavaScript 'FRAMEWORK', while react is Open Source Javascript Library</h3>
    <h2 v-bind:class="isDanger && 'danger'">DYNAMIC ELEMENTS</h2>
    <h1 v-bind:class="isTrue ? 'safe' : 'danger'">{{ isTrue }}</h1>

    <h3 v-bind:class="[isTrue && 'safe', isDanger ? 'danger' : 'safe']">CONDITIONAL ARRAY</h3>
    <h2 v-bind:class="{
        safe: isTrue,
        danger: isDanger
    }">CONDITIONAL OBJECT</h2>

    <h1 v-bind:style="{
        color: mainColor,
        fontSize: '1rem'
    }">INLINE STYLES WITH OBJECT TYPE</h1>
    <h3 v-bind:style="baseStylesObject">VUE JS</h3>
    <p :style="[baseStylesObject, extraStylesObject]">INLINE STYLES WITH ARRAY TYPE</p>
    <!-- shorhand for "v-bind" is ":" -->

    <!-- vBind is Another Component -->
    <vBind />
    <!-- vFor is Another Component -->
    <vFor />
    <vueLoops />


</template>

<script>
import vBind from './vBind.vue';
import vFor from './vFor.vue';
import vueLoops from './vueLoops.vue';
export default {
    props: {
        name: String,
        age: Number,
    },
    components: {
        vBind, vFor, vueLoops
    }
    ,
    data() {
        return {
            channel: 'This is an HTML TEXT',
            alert: `<a onclick="alert('HEY HELLO..1')">Click Me</a>`,
            id: "user-info",
            isDisabled: false,
            isDanger: true,
            isTrue: true,
            mainColor: 'lightgreen',
            baseStylesObject: {
                color: "lightblue",
                fontSize: "3rem",

            },
            extraStylesObject: {
                padding: '.4rem',
                backgroundColor: 'blue',
                borderRadius: ".5rem",
                color: 'white',
                fontSize: '1rem',
            }
        }
    }



}

</script>


<style scoped>
.head {
    background-color: lightgreen;
    color: white;
    padding: .5rem;
}

.danger {
    background-color: red;
    color: white;
    padding: .5rem;
    border-radius: .4rem;
}

.safe {
    background-color: lightblue;
    color: white;
    padding: .5rem;
    border-radius: .4rem;
}
</style>