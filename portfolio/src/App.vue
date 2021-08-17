<template>
  <div>
    <Navigation class="MaterialShadow" />
  </div>
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
@import "assets/Color.css";
@import "assets/MaterialDesign.css";

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
