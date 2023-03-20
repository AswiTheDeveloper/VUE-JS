<template>
  <main>
    <h1>Bionic Reading</h1>
    <p contenteditable="true" ref="textCopied" @click="pasteText">
      Once upon a time, in a desert far away, there was a rose who was so proud
      of her beautiful looks. Her only complaint was growing next to an ugly
      cactus. Every day, the beautiful rose would insult and mock the cactus on
      his looks, all while the cactus remained quiet. All the other plants
      nearby tried to make the rose see sense, but she was too swayed by her own
      looks. One scorching summer, the desert became dry, and there was no water
      left for the plants. The rose quickly began to wilt. Her beautiful petals
      dried up, losing their lush color. Looking to the cactus, she saw a
      sparrow dip his beak into the cactus to drink some water. Though ashamed,
      the rose asked the cactus if she could have some water. The kind cactus
      readily agreed, helping them both through the tough summer, as friends.
    </p>
    <button @click="getBionic">Read</button>
    <section ref="sectionRef" v-html="text" class="section"></section>
  </main>
</template>

<script>
// import useUserFromDbStore from '../pinia/users';
export default {
  name: "bionicReading",
  // beforeRouteEnter(to, from, next) {
  //   const store = useUserFromDbStore();
  //   if (store.userLoggedIn) {
  //     next();
  //   }
  //   else {
  //     next({ name: 'signIn' });
  //   }

  // }

  data() {
    return {
      text: "",
    };
  },
  updated() {
    console.log("updated");
    let strong = document.querySelectorAll(".section strong");
    strong.forEach((e) => (e.style.fontFamily = "sans-serif"));
    console.log(strong);
  },
  methods: {
    getBionic() {
      let text = this.$refs.textCopied.innerText.split(" ");
      text.forEach((e) => {
        let length = Math.floor(e.length / 2);
        let temp = e.slice(0, length + 1);
        temp = "<strong>" + temp + "</strong>" + e.slice(length + 1) + " ";
        this.text = this.text + temp;
        this.$refs.sectionRef.innerText = this.text;
      });
    },
    pasteText() {
      navigator.clipboard
        .readText()
        .then((e) => (this.$refs.textCopied.innerText = e));
    },
  },
};
</script>

<style scoped>
main {
  width: 70rem;
  padding: 1rem;
  margin: 1rem;
  background-color: #3a3a3c;
  position: relative;
  border-radius: 0.5rem;
}
h1 {
  color: #d46f4a;
  font-size: 5rem;
  margin: 2rem;
  font-family: fantasy;
  letter-spacing: 0.4rem;
}
p {
  width: 60%;
  height: 10rem;
  border-radius: 1rem;
  border: 1px solid white;
  outline: none;
  text-align: start;
  padding: 0.5rem;
  color: #8e8e93;
  margin: 0.7rem;
  overflow: hidden;
  position: relative;
}
p::after {
  content: "Copy your Favourite story";
  position: absolute;
  top: 4rem;
  left: 1rem;
  font-size: 1.7rem;
  font-weight: bold;
}
button {
  background-color: #d46f4a;
  color: white;
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 0.4rem;
  font-weight: bold;
}
section {
  width: 80%;
  height: auto;
  min-height: 40rem;
  color: white;
  padding: 1rem;
  padding-top: 2rem;
  line-height: 1.7rem;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  font-size: 1.3rem;
}
.bold {
  font-weight: bold;
  font-family: sans-serif;
}
</style>