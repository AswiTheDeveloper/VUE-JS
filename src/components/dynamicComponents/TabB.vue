<template>
    <main>
        <h2>Tab B Content</h2>
        <Input />
    <vueButton name="next"/>
    </main>
</template>
 
<script>
import Input from "../vueComponents/Input.vue";
import vueButton from "../vueComponents/button.vue";
export default {
    name: 'TabB',
    components: { Input,vueButton },

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