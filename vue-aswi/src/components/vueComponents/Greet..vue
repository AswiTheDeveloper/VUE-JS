<template lang="">
   <main>
<h1>Hello {{name}}</h1>
<h3>{{role}}</h3>

   </main>
</template>
<script>
export default {
    name: 'GreetUser',
    props: {
        name: String,
        role: String,
    }
}
</script>
<style lang="">
    
</style>