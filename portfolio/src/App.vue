<template>
  <div class="app-container">
    <Navigation class="MaterialShadow" />
    <router-view />
    <About />
    <Skill />
    <Project />
    <Contact />
    <TopButton />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";
import TopButton from "./components/TopButton.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navigation,
    About,
    Skill,
    Project,
    Contact,
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
  background-color: var(--bs-grey700);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left: 60px;
  padding-right: 60px;
  color: var(--bs-grey50);
}

.section-title {
  border-bottom: 2px solid var(--bs-grey500);
  color: var(--bs-grey50);
}
</style>
