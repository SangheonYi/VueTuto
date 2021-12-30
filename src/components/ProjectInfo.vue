<template>
  <div class="project project-content MaterialCard">
    <div class="contact-container">
      <div class="section-title ">
        <h2>{{ project.name }}.</h2>
      </div>
      <div class="partition">
        <span class="yellow-under-line" />
        <span class="dark-yellow-under-line" />
        <span class="light-yellow-under-line" />
        <span class="deep-yellow-under-line" />
        <span class="semi-dark-yellow-under-line" />
      </div>
      <div class="project-info">
        <div class="project-description">
          <div>
            {{ project.description }}
          </div>
          <img :src="require(`../assets/contact_icon/${gitIcon}`)" /> :
          <a class="contact-a" :href="project.git">{{ project.git }}</a>
        </div>
        <div class="project-image-container">
          <img
            v-for="element in project.screenshot"
            :key="element"
            :src="require(`../assets/project/${element}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const gitIcon = "github.svg";
export default {
  name: "ProjectInfo",
  props: {
    project: JSON,
  },
  data() {
    return { gitIcon };
  },
};
</script>

<style>
.project-info {
  padding: 15px;
}

.project-image-container {
  max-width: 1000px;
}

.project-image-container img {
  width: 100%;
}

.project-content {
  margin-left: 15px;
  margin-right: 15px;
}

.project-image-container {
  display: flex;
  margin: 15px;
}

.dark-yellow-under-line {
  width: 10%;
  background-color: var(--rally-dark-yellow);
}

.yellow-under-line {
  width: 25%;
  background-color: var(--rally-yellow);
}

.deep-yellow-under-line {
  width: 15%;
  background-color: var(--rally-deep-yellow900);
}

.light-yellow-under-line {
  width: 30%;
  background-color: var(--rally-light-yellow);
}

.semi-dark-yellow-under-line {
  width: 20%;
  background-color: var(--rally-semi-dark-yellow);
}
</style>
