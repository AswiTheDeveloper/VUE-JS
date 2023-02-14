<template lang="">
    <!-- {{Mustache syntax}} -->

<h1 v-once >{{name}}</h1>

<button @click="name='Alex'">change name</button>

<h2>computed properties</h2>
<h3>computed fullname: {{fullname}}</h3>
<button @click="changeFullName">changeFullName</button>
<p v-for="(item, index) in items" :key="index">
<span>{{item.id}}.</span> <span>{{item.name}}</span> <span>{{item.price}}</span>
</p>
<h4>Computed Total Price: {{totalPrice}}</h4>
<h4>Norma method Total Price: {{totalMethod()}}</h4>
<p><button @click="addMore">Add More Items</button></p>
<p><strong>Enter something to see normal method renders every time when compared to computed method(cached)</strong></p>
<input type="text" v-model="check" placeholder="Enter Something">
<h2>{{check}}</h2>

<h2>Expensive things:</h2>
<ul type="none">
    <li v-for="item in items" :key="item.id"><span v-if="item.price>100">{{item.id}}. {{item.name}}-{{item.price}}</span></li>
</ul>
<h3>with Computed property Expensive Things:(reusabe,clean, it caches value not render unnecessarily)</h3>
<ol>
    <li v-for="item in expensiveThings" :key="item.id">{{item.name}} - {{item.price}}</li>
</ol>
</template>
<script>

export default {
    data() {
        return {
            name: 'Aswi',
            fname: 'Alex',
            lname: 'Aloe',
            items: [
                {
                    id: 1,
                    name: 'Laptop',
                    price: 200
                },
                {
                    id: 2,
                    name: 'Phone',
                    price: 100
                },
                {
                    id: 3,
                    name: 'Keyboard',
                    price: 50
                }
            ],
            moreItems: [
                {
                    id: 4,
                    name: 'Mouse',
                    price: 20
                },
                {
                    id: 5,
                    name: 'notebook',
                    price: 10
                }
            ],
            check: '',
        }
    },

    methods: {
        changeFullName() {
            this.fullname = 'Aswi Aswi';
            console.log(this.fullname);
        },
        addMore() {

            this.items.push(...this.moreItems);
            console.log(this.items);
            //filter duplicates from Array of Objects

            let temp = this.items.map(JSON.stringify);
            this.items = Array.from(new Set(temp)).map(JSON.parse);

        },
        totalMethod() {
            console.log('total Price in Normal metod');
            return this.items.reduce((t, c) => c.price + t, 0)

        }
    },
    computed: {
        fullname: {
            get() {
                return this.fname + " " + this.lname;
            },
            set(value) {
                // [this.fname, this.lname] = value.split(' ');
                let names = value.split(' ');
                this.fname = names[0];
                this.lname = names[1];
            }
        },
        totalPrice() {
            console.log('total Price in Computed metod');
            return this.items.reduce((t, c) => c.price + t, 0)
        },
        expensiveThings() {
            return this.items.filter(f => f.price > 100)
        }
    },

}
</script>
<style lang="">
    
</style>