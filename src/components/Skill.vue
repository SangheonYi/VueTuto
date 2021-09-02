<template>
  <div class="MaterialCard">
    <div class="skill">
      <div class="skill-contents ">
        <div class="section-title ">
          <h2>
            My Programming Skills?
          </h2>
        </div>
        <div class="partition">
          <span class="dark-orange-under-line" />
          <span class="orange-under-line" />
          <span class="light-orange-under-line" />
          <span class="semi-dark-orange-under-line" />
        </div>
        <div class="contents-container">
          <div class="front">
            <img
              class="skill-image"
              v-for="element in images"
              :key="element"
              :src="require(`../assets/skill_icon/${element}`)"
            />
          </div>
        </div>
      </div>
      <div class="skill-description">
        <p>
          some description
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const images = [
  `C_Programming_Language.svg`,
  `ISO_C++_Logo.svg`,
  `java.svg`,
  `Kotlin_Icon.svg`,
  `JavaScript.svg`,
  `Typescript_logo_2020.svg`,
  `Android_robot.svg`,
  `React-icon.svg`,
  `Vue.js_Logo_2.svg`,
  `nestjs-icon.svg`,
  `postgresql.svg`,
  `docker.svg`,
];
export default {
  name: "Skill",

  data() {
    return {
      images,
    };
  },
};
</script>

<style>
.skill {
  display: flex;
  flex-direction: row;
}

.skill-description {
  width: 25%;
  margin-left: 20px;
  color: var(--bs-grey300);
  background: var(--bs-grey801);
}

.skill-contents {
  width: 75%;

  color: var(--bs-grey300);
  background: var(--bs-grey801);
}

.contents-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contents-container .skill-image {
  border-radius: 20px;
  width: 10%;
  height: 30%;
  padding: 5px;
  margin: 20px;
  background-color: var(--bs-grey700);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.contents-container .skill-image:hover {
  background-color: var(--bs-grey500);
  transform: translateY(-10px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 5px 12px rgba(0, 0, 0, 0.5);
}

.partition {
  display: flex;
}

.partition span {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
}

.dark-orange-under-line {
  width: 10%;
  background-color: var(--rally-dark-orange);
}

.orange-under-line {
  width: 30%;
  background-color: var(--rally-orange);
}

.light-orange-under-line {
  width: 40%;
  background-color: var(--rally-light-orange);
}

.semi-dark-orange-under-line {
  width: 20%;
  background-color: var(--rally-semi-dark-orange);
}
</style>
