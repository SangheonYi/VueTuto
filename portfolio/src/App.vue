<template>
  <div class="app-container">
    <Navigation class="MaterialShadow" />
    <transition appear name="slide-fade">
      <router-view />
    </transition>
    <TopButton />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TopButton from "./components/TopButton.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navigation,
    TopButton,
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
  margin: 0%;
  background-color: var(--bs-grey800);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--bs-grey50);
}

.section-title {
  color: var(--bs-grey200);
  border-bottom: 2px solid transparent;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(80px);
  opacity: 0;
}
</style>
