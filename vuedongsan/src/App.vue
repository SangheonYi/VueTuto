<template>
  <div class="menu">
    <a v-for="(entry, i) in tabs" :key="entry"> {{ entry }} {{ i }} </a>
  </div>
  <div v-for="(item, index) in price" :key="index">
    <h4>{{ products[index] }} 원룸</h4>
    <p>{{ price[index] }} 만원</p>
  </div>

  <button v-on:click="increment">increment</button>
  <button @click="countNum--">decrement</button>
  <h3 @drag="countNum = 0">clear</h3>
  <input @input="countNum = 0" />
  <span>신고수: {{ countNum }}</span>
</template>

<script>
let countNum = 0;
const inc = () => {
  console.log(`inc`);
  this.countNum++;
};
export default {
  name: "App",
  data() {
    return {
      tabs: [`home`, `shop`, `about`],
      products: [`일원`, `마포`, `개포`],
      price: [100, 22, 33],
      countNum,
      inc,
    };
  },
  methods: {
    increment() {
      this.countNum++;
      inc();
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
