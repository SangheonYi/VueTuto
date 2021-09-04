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
              v-for="element in skills"
              :key="element"
              :src="require(`../assets/skill_icon/${element.icon}`)"
              @mouseenter="showDescription(element)"
            />
          </div>
        </div>
      </div>
      <div class="skill-detail">
        <h2 class="skill-detail-name"></h2>
        <p class="skill-detail-description"></p>
      </div>
    </div>
  </div>
</template>

<script>
const c_cpp_description = `
   - semaphore, mutex, pipe를 사용한 thread, process 비동기 프로그래밍 경험\n
   - Makefile 매크로 작성 및 relink 방지 경험\n
   -
   `;
const java_kotlin_description = ``;
const skills = [
  {
    icon: `C_Programming_Language.svg`,
    name: `C`,
    description: c_cpp_description,
  },
  { icon: `ISO_C++_Logo.svg`, name: `C++`, description: c_cpp_description },
  { icon: `java.svg`, name: `Java`, description: java_kotlin_description },
  {
    icon: `Kotlin_Icon.svg`,
    name: `Kotlin`,
    description: java_kotlin_description,
  },
  { icon: `JavaScript.svg`, name: `JavaScript`, description: `` },
  { icon: `Typescript_logo_2020.svg`, name: `Typescript`, description: `` },
  { icon: `Android_robot.svg`, name: `Android`, description: `` },
  { icon: `React-icon.svg`, name: `React`, description: `` },
  { icon: `Vue.js_Logo_2.svg`, name: `Vue.js`, description: `` },
  { icon: `nestjs-icon.svg`, name: `Nestjs`, description: `` },
  { icon: `postgresql.svg`, name: `Postgresql`, description: `` },
  { icon: `docker.svg`, name: `Docker`, description: `` },
];
export default {
  name: "Skill",
  data() {
    return {
      skills,
    };
  },
  methods: {
    showDescription: (skill) => {
      const detail = document.querySelector(`.skill-detail`);
      console.log(detail);
      detail.style.backgroud = `white`;
      const name = document.querySelector(`.skill-detail-name`);
      name.textContent = skill.name;
      const description = document.querySelector(`.skill-detail-description`);
      description.textContent = skill.description;
    },
  },
};
</script>

<style>
.skill {
  display: flex;
  flex-direction: row;
}

.skill-contents {
  width: 75%;
  color: var(--bs-grey300);
  background: var(--bs-grey801);
}

.skill-detail {
  width: 25%;
  margin-left: 20px;
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
