<template>
  <div class="MaterialCard">
    <div class="skill-flex">
      <div class="skill-container ">
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
        <div>
          <ul class="contents-container">
            <li v-for="element in skills" :key="element">
              <div class="skill-card">
                <img
                  class="skill-image"
                  :src="require(`../assets/skill_icon/${element}`)"
                  @mouseenter="showDescription($event)"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const skills = [
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
      skills,
    };
  },
  methods: {
    showDescription: (event) => {
      console.log(event.target.style.display);
      // event.target.style.visibility = `hidden`;
    },
  },
};
</script>

<style>
.skill-flex {
  display: flex;
}

.skill-container {
  width: 100%;
  color: var(--bs-grey300);
  background: var(--bs-grey801);
}

.contents-container {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  justify-content: center;

  list-style-type: none;
  box-sizing: border-box;
}

.contents-container li {
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  margin: 0 8px 16px;
  position: relative;

  border-radius: 0.63rem;
  background-color: var(--bs-grey700);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.contents-container li:hover {
  background-color: var(--bs-grey500);
  transform: translateY(-10px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 5px 12px rgba(0, 0, 0, 0.5);
}

.skill-card {
  height: 100%;
  width: 100%;
  display: block;
}

.contents-container .skill-image {
  display: block;
  width: 80%;
  height: 100%;
  margin: auto;
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

.skill-card {
}

.image-section {
  z-index: 100;
}

.name-section {
  z-index: 2;
}
</style>
