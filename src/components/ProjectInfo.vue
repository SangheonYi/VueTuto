<template>
  <div class="project MaterialCard">
    <div class="project-content">
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
      <div class="project-info contact-container">
        <div class="project-image-container">
          <div>
            <img
              v-for="element in project.screenshot"
              :key="element"
              :src="require(`../assets/project/${element}`)"
            />
          </div>
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
.project-info img {
  width: 50%;
}

.project-image-container {
  display: flex;
  margin-top: 15px;
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
