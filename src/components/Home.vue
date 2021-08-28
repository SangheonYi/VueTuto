<template>
  <div class="Home-container">
    <About />
    <Skill />
    <Project />
    <Contact />
    <TopButton />
  </div>
</template>

<script>
import About from "./About.vue";
import Skill from "./Skill.vue";
import Project from "./Project.vue";
import Contact from "./Contact.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    About,
    Skill,
    Project,
    Contact,
  },
};
</script>

<style></style>
