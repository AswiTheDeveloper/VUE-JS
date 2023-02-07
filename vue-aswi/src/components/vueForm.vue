<template>
    <form action="">
        <h2>Form Controls in Vue Js</h2>
        <label for="name">Name</label>
        <input type="text" placeholder="name" name="" id="name" v-model.trim.lazy="values.name">
        <label for="phone">Phone</label>
        <input type="number" placeholder="phone" id="phone" v-model.number="values.phone">

        <label for="">Are you?
            <span>
                <input type="radio" name="gender" value="male" v-model="values.gender">Male
                <input type="radio" name="gender" value="female" v-model="values.gender">Female
                <br>
                <input type="radio" name="gender" value="prefer not to say" v-model="values.gender">prefer not to say

            </span>
        </label>


        <label for="country">Country</label>
        <select name="" id="" v-model="values.country">
            <!-- <option value="select">SELECT</option> -->
            <option value="ind">INDIA</option>
            <option value="china">CHINA</option>
            <option value="nepal">NEPAL</option>
        </select>

        <label for="country">New Country to Shift</label>
        <span><strong>note:</strong>hold ctrl to select multiple options in multiselect</span>
        <select name="" id="" multiple v-model="values.newCountry">
            <option value="select">SELECT</option>
            <option value="ind">INDIA</option>
            <option value="china">CHINA</option>
            <option value="nepal">NEPAL</option>
        </select>
        <label for="feedback">Feedback</label>
        <textarea name="" id="feedback" cols="35" rows="6" placeholder="your feedback..!"
            v-model="values.feedback"></textarea>
        <label for="">Skills:</label>

        <label for="html"> <input type="checkbox" name="" id="html" v-model="values.skillSet" value="html">HTML</label>

        <label for="css"><input type="checkbox" name="" id="css" v-model="values.skillSet" value="css">CSS</label>
        <label for="javascript"><input type="checkbox" name="" id="javascript" v-model="values.skillSet"
                value="javascript">JavaScript</label>

        <label for="check"><input id="check" type="checkbox" v-model="values.moreUpdates"> check if you
            want more
            updates..!</label>
        <button @click.prevent="submitForm">save</button>
    </form>
    <p>{{ JSON.stringify(values, null, 2) }}</p>


    <h2>alert on key up only on Enter button</h2>
    <input type="text" @keyup.enter="toAlert">
</template>

<script>
export default {
    data() {
        return {
            values: {
                name: 'aswi',
                phone: '',
                gender: '',
                country: "",
                newCountry: ['hold ctrl for multi select'],
                feedback: '',
                skillSet: [],
                moreUpdates: false,
            }
        }
    },
    methods: {
        submitForm() {
            // e.preventDefault();
            console.log('Form Data:', this.values)
        },
        toAlert() {
            alert('Hello...')
        }
    }
}




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
    width: 17rem;
}

input,
textarea {
    width: 100%;
    padding: .4rem;
    border-radius: .4rem;
    margin-bottom: .5rem;
    border: 1px solid rgb(216, 208, 208);

}

input[type="checkbox"],
input[type="radio"] {
    width: 1rem;
    padding: 1rem;
    border: red;
}

select {
    width: 100%;
}

button {
    width: 5rem;
    padding: .1rem 1rem;
    font-size: 1rem;
}

label {
    margin-top: .4rem;
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

h2+input {
    width: 10rem;
    border: none;
}
</style>