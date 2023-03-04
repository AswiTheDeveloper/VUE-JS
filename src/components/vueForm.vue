<template>
  <vee-form action="" :validation-schema="schema" @submit="submitForm">
    <h2>Form Controls in Vue Js</h2>
    <span :style="finalMsg" ref="finalMessage"></span>
    <label for="name">Name</label>
    <vee-field
      type="text"
      placeholder="name"
      name="name"
      id="name"
      v-model.lazy="values.name"
    />
    <ErrorMessage name="name" class="error" />
    <label for="phone">Phone</label>
    <vee-field
      type="number"
      placeholder="phone"
      id="phone"
      name="phone"
      v-model.number="values.phone"
    />
    <ErrorMessage class="error" name="phone" />
    <label for="phone">Email</label>
    <vee-field
      type="email"
      name="email"
      placeholder="email"
      id="email"
      v-model.number="values.email"
    />
    <ErrorMessage name="email" class="error" />
    <label for="">Age</label>
    <vee-field
      name="age"
      type="number"
      placeholder="age"
      v-model="values.age"
    />
    <ErrorMessage name="age" class="error" />
    <label for="">Password</label>
    <vee-field
      name="password"
      type="password"
      placeholder="password"
      v-model="values.password"
    />
    <ErrorMessage name="password" class="error" />

    <label for="">Confirm Password</label>
    <vee-field
      name="confirmPassword"
      type="password"
      placeholder="confirm password"
      v-model="values.confirmPassword"
    />
    <ErrorMessage name="confirmPassword" class="error" />

    <label for=""
      >Are you?
      <span>
        <input
          type="radio"
          name="gender"
          value="male"
          v-model="values.gender"
        />Male
        <input
          type="radio"
          name="gender"
          value="female"
          v-model="values.gender"
        />Female
        <br />
        <input
          type="radio"
          name="gender"
          value="prefer not to say"
          v-model="values.gender"
        />prefer not to say
      </span>
    </label>

    <label for="country">Country(select China(warn:excluded))</label>
    <vee-field as="select" name="selectCountry" id="" v-model="values.country">
      <!-- <option value="select">SELECT</option> -->
      <option value="ind">INDIA</option>
      <option value="china">CHINA</option>
      <option value="nepal">NEPAL</option>
    </vee-field>
    <ErrorMessage class="error" name="selectCountry" />
    <label for="country">New Country to Shift</label>
    <span
      ><strong>note:</strong>hold ctrl to select multiple options in
      multiselect</span
    >
    <select name="" id="" multiple v-model="values.newCountry">
      <option value="select">SELECT</option>
      <option value="ind">INDIA</option>
      <option value="china">CHINA</option>
      <option value="nepal">NEPAL</option>
    </select>

    <label for="">Skills:</label>

    <label for="html">
      <input
        type="checkbox"
        name=""
        id="html"
        v-model="values.skillSet"
        value="html"
      />HTML</label
    >

    <label for="css"
      ><input
        type="checkbox"
        name=""
        id="css"
        v-model="values.skillSet"
        value="css"
      />CSS</label
    >
    <label for="javascript"
      ><input
        type="checkbox"
        name=""
        id="javascript"
        v-model="values.skillSet"
        value="javascript"
      />JavaScript</label
    >
    <label for="feedback">Feedback</label>
    <textarea
      name=""
      id="feedback"
      cols="35"
      rows="6"
      placeholder="your feedback..!"
      v-model="values.feedback"
    ></textarea>
    <label for="check"
      ><vee-field
        id="check"
        type="checkbox"
        name="updates"
        value="1"
        v-model="values.moreUpdates"
      />
      check if you want more updates..!</label
    >
    <ErrorMessage name="updates" class="error" />
    <button>save</button>
  </vee-form>
  <p>{{ JSON.stringify(values, null, 2) }}</p>

  <h2>alert on key up only on Enter button</h2>
  <input type="text" @keyup.enter="toAlert" />
</template>

<script>
import { ErrorMessage } from "vee-validate";
import { auth ,userCollection} from "../firebase/firebase";

export default {
  name: "vueForm",
  data() {
    return {
      schema: {
        name: "required|min:4|max:10",
        phone: "required",
        email: "required|email",
        age: "required|minVal:18|maxVal:48",
        password: "required|min:3|max:10",
        confirmPassword: "required|confirmed:@password",
        selectCountry: "required|excluded:china",
        updates: "required",
      },
      values: {
        name: "",
        phone: "",
        email: "",
        age: 18,
        password: "",
        gender: "",
        country: "",
        newCountry: ["hold ctrl for multi select"],
        feedback: "",
        skillSet: [],
        moreUpdates: false,
      },
      finalMsg: {},
    };
  },
  methods: {
    async submitForm(value) {
      // e.preventDefault();
      let userCred = null;
      try {
        userCred = await auth.createUserWithEmailAndPassword(
          value.email,
          value.password
        );
      } catch (error) {
        console.log(error);
        this.finalMsg = { backgroundColor: "red", color: "white" };
        this.$refs.finalMessage.innerText = "something went wrong";
        return;
      }

      try {
       const user= await userCollection.add({
          name: value.name,
          age: value.age,
          country: value.selectCountry,
          email: value.email,
       });
        console.log({user});
      }
      catch (error) {
        this.finalMsg = { backgroundColor: "red", color: "white" };
        this.$refs.finalMessage.innerText = "something went wrong";
        console.log(error)
        return;
        
      }


      this.finalMsg = { backgroundColor: "lightgreen", color: "white" };
      this.$refs.finalMessage.innerText = "form submitted successfully";
      console.log(userCred);
      console.log("Form Data:", this.values);
      console.log({ value });
    },
    toAlert() {
      alert("Hello...");
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
}
.error {
  color: red;
}
h2 + span {
  padding: 0.4rem;
}
</style>