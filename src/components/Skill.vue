<template>
  <div class=" MaterialCard">
    <div class="section-title ">
      <h2>
        My Programming Skills?
      </h2>
    </div>
    <div class="skill">
      <div class="skill-contents">
        <h3>Programming Langauge</h3>
        <div class="contents-container">
          <img
            v-for="element in PLImages"
            :key="element"
            :src="require(`../assets/skill_icon/${element}`)"
          />
        </div>
      </div>
      <div class="skill">
        <div class="skill-contents">
          <h3>Framework</h3>
          <div class="contents-container">
            <img
              v-for="element in frameworkImages"
              :key="element"
              :src="require(`../assets/skill_icon/${element}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const PLImages = [
  `ISO_C++_Logo.svg`,
  `java.svg`,
  `Kotlin_Icon.svg`,
  `JavaScript.svg`,
  `Typescript_logo_2020.svg`,
];
const frameworkImages = [
  `Android_robot.svg`,
  `React-icon.svg`,
  `Vue.js_Logo_2.svg`,
  `nestjs-icon.svg`,
];
export default {
  name: "Skill",

  data() {
    return {
      PLImages,
      frameworkImages,
    };
  },
};
</script>

<style>
.skill {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.skill-contents {
  width: 75%;
  padding-right: 30px;
  padding-left: 30px;
  color: var(--bs-grey300);
  background: var(--bs-grey801);
}
.contents-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  width: 10%;
  height: 100%;
}

.partition {
  display: flex;
}

.partition span {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
}

.partition span:hover {
  width: 100%;
}

.dark-green-under-line {
  width: 10%;
  background-color: var(--rally-dark-green);
}

.green-under-line {
  width: 40%;
  background-color: var(--rally-green);
}

.light-green-under-line {
  width: 30%;
  background-color: var(--rally-light-green);
}

.semi-dark-green-under-line {
  width: 20%;
  background-color: var(--rally-semi-dark-green);
}
</style>
