<template>
  <Navigation />
</template>

<script>
import Navigation from "./components/Navigation.vue";

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
  },
};
</script>

<style>
body {
  background-color: #424242;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
