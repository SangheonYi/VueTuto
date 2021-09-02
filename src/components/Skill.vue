<template>
  <div class=" ">
    <div class="skill">
      <div class="skill-contents">
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
          <img
            v-for="element in images"
            :key="element"
            :src="require(`../assets/skill_icon/${element}`)"
          />
        </div>
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
  justify-content: center;
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

.contents-container img {
  border-radius: 20px;
  width: 10%;
  padding: 5px;
  margin: 20px;
  background-color: aliceblue;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

img:hover {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
