<template>
    <main>
        <h2>Tab C Content</h2>
        <Input  v-model="value"/>
        <vueButton name="SAVE"/>
    </main>
</template>
 
<script>
import Input from '../vueComponents/Input.vue';
import vueButton from '../vueComponents/button.vue';
export default {
    name: 'TabC',
    data() {
        return {
            value:'',
        }
    },
    components: {
        Input,vueButton
    },
    provide() {
        return {
            value:this.value,
        }
    },
    inject:['test'],
}
</script>
 
<style scoped>
main{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
button{
    width: 5rem;
    align-self: center;
}</style>