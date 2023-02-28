<template>

<h2>Section Block</h2>
</template>

<script>
export default {
    name: "SectionBlock",
  
    beforeCreate() {
    console.log('beforecreate')
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforemount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>

</style>