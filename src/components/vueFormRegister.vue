<template>
  <main>
    <vee-form action="" :validation-schema="schema" @submit="signIn">
      <h2>Form Controls in Vue Js LogIn</h2>
      <span :style="authenticateStyles" ref="authenticateRef"></span>

      <label for="">Email</label>
      <vee-field
        type="email"
        name="signUpEmail"
        placeholder="email"
        v-model="values.signUpEmail"
      />
      <ErrorMessage name="signUpEmail" class="error" />
      <label for="">Password</label>
      <vee-field
        name="signUpPassword"
        type="password"
        placeholder="password"
        v-model="values.signUpPassword"
      />
      <ErrorMessage name="signUpPassword" class="error" />
      <button>SignIn</button>
    </vee-form>
  </main>
</template>
<script>
import useUserInfoStore from "@/pinia/pinia";
import useUserFromDbStore from "../pinia/users";
import { mapActions, mapWritableState } from "pinia";
import { ErrorMessage } from "vee-validate";

export default {
  name: "vueFormRegister",
  data() {
    return {
      schema: {
        signUpEmail: "required|email",
        signUpPassword: "required|min:3|max:10",
      },
      values: {
        signUpEmail: "",
        signUpPassword: "",
      },
      authenticateStyles: {},
    };
  },
  computed: {
    ...mapWritableState(useUserFromDbStore, ["userLoggedIn"]),
  },
  methods: {
    ...mapActions(useUserInfoStore, {
      authenticateUser: "authenticateUser",
    }),
    async signIn(value) {
      try {
        let test = await this.authenticateUser(value);
        console.log(test);
      } catch (error) {
        console.log(error);
        this.authenticateStyles = { backgroundColor: "red", color: "white" };
        this.$refs.authenticateRef.innerText = "something went wrong (don't have account please SignUP)";
        return;
      }
       this.authenticateStyles = {
        backgroundColor: "lightgreen",
        color: "white",
      };
      this.$refs.authenticateRef.innerText = "Sign Successful..";
      this.userLoggedIn = true;
      console.log(this.$route);

      await this.$router.push({ name: this.$route.redirectedFrom.name });
    },
  },
  components: { ErrorMessage },
};
</script>
  
  <style scoped>
h2 {
  font-size: 1.3rem;
  margin: 1rem 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 25rem;
}

input,
textarea {
  width: 90%;
  padding: 0.4rem;
  border-radius: 0.4rem;
  margin-bottom: 0.5rem;
  border: 1px solid rgb(216, 208, 208);
}
input[type="checkbox"],
input[type="radio"] {
  width: 1rem;
  padding: 1rem;
  border: red;
}

select {
  width: 60%;
}

button {
  width: 5rem;
  padding: 0.1rem 1rem;
  font-size: 1rem;
}

label {
  margin-top: 0.4rem;
}

label span {
  padding: 0 1rem;
}

p {
  font-family: monospace;
  margin: 1rem;
  font-size: 1.3rem;
  width: 15rem;
}

h2 + input {
  width: 10rem;
}
form {
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 1rem 0;
}
.error {
  color: red;
}
h2 + span {
  padding: 0.4rem;
}
</style>