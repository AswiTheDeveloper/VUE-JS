<template>
    <h1>NEW COMPONENT</h1>
    <h1 :class="isAvailable ? 'available' : 'soldOut'" :style="{
        padding: '.5rem'
    }">{{
    isAvailable?'AVAILABLE': 'SOLD OUT'
}}
    </h1>


    <conditionalRendering />
</template>

<script>
import conditionalRendering from './conditionalRendering.vue';
export default {
    data() {
        return {
            isAvailable: true
        }
    },
    components: {
        conditionalRendering
    }


}
</script>


<style>
.available {
    background-color: lightgreen;
    color: white;
}

.soldOut {
    background-color: red;
}
</style>