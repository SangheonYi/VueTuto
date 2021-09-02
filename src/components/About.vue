<template>
  <div class="about MaterialCard">
    <img class="about-img " src="../assets/이상헌.jpg" />
    <div class="about-content">
      <div class="section-title ">
        <h2>
          Who am I?
        </h2>
      </div>
      <div class="partition">
        <span class="dark-green-under-line" />
        <span class="green-under-line" />
        <span class="light-green-under-line" />
        <span class="semi-dark-green-under-line" />
      </div>
      <div class="about-text">
        <h3>Hello World! 개발자 이상헌입니다!</h3>
        <p>
          수학, 컴퓨터 공학 학사 학위 취득 후 42Seoul을 이수 중입니다. 문제에
          대한 새로운 관점 및 최적화 하는데에 관심이 많습니다. 새로운 기능 추가,
          성능개선 개발 과정에서 발생하는 다양한 문제해결을 즐깁니다. 유지보수가
          쉬운 유연하고 깔끔한 프로그래밍에 관심이 많습니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
};
</script>

<style scoped>
.about {
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
}

.about-img {
  width: 20%;
  height: auto;
  padding: 20px;
}

.about-content {
  width: 75%;
  color: var(--bs-grey300);
  background: var(--bs-grey801);
}

.about-text {
  padding: 10px;
}

p {
  display: block;
  color: var(--bs-grey400);
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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
