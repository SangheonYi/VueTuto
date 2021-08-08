<template>
  <div class="menu">
    <a v-for="(entry, i) in tabs" :key="entry"> {{ entry }} {{ i }} </a>
  </div>

  <div class="black-bg" v-if="isModalOpen" @click="isModalOpen = false">
    <div class="white-bg">
      <h4>상세</h4>
      <p>상세 내용</p>
      <h1>{{ profile }}</h1>
      <h2>{{ profile.name }}</h2>
      <h2>{{ profile.skill }}</h2>
    </div>
  </div>

  <div v-for="(item, index) in price" :key="index">
    <h4 @click="isModalOpen = true">{{ products[index] }} 원룸</h4>
    <p>{{ price[index] }} 만원</p>
  </div>

  <button v-on:click="increment">increment</button>
  <button @click="countNum--">decrement</button>
  <h3 @drag="countNum = 0">clear</h3>
  <input @input="countNum = 0" />
  <span>신고수: {{ countNum }}</span>
</template>

<script>
import profile from "./profile";
let countNum = 0;
const inc = () => {
  console.log(`inc`);
  this.countNum++;
};
export default {
  name: "App",
  data() {
    return {
      isModalOpen: false,
      tabs: [`home`, `shop`, `about`],
      products: [`일원`, `마포`, `개포`],
      price: [100, 22, 33],
      countNum,
      inc,
      profile,
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
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
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
