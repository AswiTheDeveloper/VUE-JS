<template>
  <main>
    <vueButton @click="getPosts" name="Load Posts" />
    <section v-for="(product, index) in posts" :key="index" ref="postsRef">
      <h2>{{ product.name }}</h2>
      <p>{{ product.phone }}</p>
      <p>{{ product.company }}</p>
    </section>

    <form action="" @submit.prevent="createPosts">
      <input type="text" placeholder="Name" ref="userNameRef"  v-model="newUser.name"/>
      <input type="text" name="" id="" placeholder="Role" ref="userRoleRef" v-model="newUser.role"/>
      <input type="number" placeholder="Phone"  v-model="newUser.phone"/>
      <button>SAVE</button>
    </form>
  </main>
</template>
<script>
import vueButton from "../components/vueComponents/button.vue";
import axios from "axios";
export default {
  name: "JsonPosts",
  
  data() {
    return {
      posts: [],
      errMsg: "",
      newUser: {
        name: "",
        role: "",
        phone: "",
      },
    };
  },
  components: {
    vueButton,
  },
  beforeMount() {
    // alert('beforemount')
    // this.getPosts();
  },
  mounted() {
    let elements = document.body.querySelectorAll('h2');
    console.log({ elements });
    this.$refs.userNameRef.focus();
    setTimeout(() => {
      this.$refs.userRoleRef.focus();

    }, 2000);
    console.log(this.$refs.postsRef,'here');

  },
  methods: {
    getPosts() {
      console.log("here");
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      });
    },
    createPosts() {
        axios.post("https://jsonplaceholder.typicode.com/users", this.newUser)
            .then(res => {
                console.log({ res });
                console.log(this.newUser);
                this.getPosts();
            })
            .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>
section {
  width: 30rem;
  padding: 1rem;
  margin: 1rem;
}
form {
}
input {
  display: block;
  margin: 0.4rem;
  width: 15rem;
  padding: 0.4rem;
  border-radius: 0.5rem;


}
input:focus{
  outline: 3px solid lightgreen;
  border: none;
}
</style>