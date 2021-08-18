<template>
  <div class="app-container">
    <Navigation class="MaterialShadow" />
    <About />
    <About />
    <About />
    <About />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import About from "./components/About.vue";

const msg = "this is first tab";
export default {
  name: "App",
  data() {
    return {
      msg,
    };
  },
  components: {
    Navigation,
    About,
  },
};
</script>

<style>
@import "assets/Color.css";
@import "assets/MaterialDesign.css";

.app-container {
  height: 70%;
}

body {
  background-color: var(--bs-grey800);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
