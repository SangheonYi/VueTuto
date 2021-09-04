<template>
  <div class="Home-container">
    <div class="about-contact-container">
      <About class="home-about" />
      <Contact class="home-contact" />
    </div>
    <Skill />
    <Project />
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

<style>
.about-contact-container {
  padding-left: 70px;
  padding-right: 10px;
  display: flex;
}

.about-contact-container .MaterialCard {
  margin-left: 10px;
  margin-right: 10px;
}

.home-about {
  width: 64%;
  height: 100%;
}
.home-contact {
  width: 25%;
}
</style>
