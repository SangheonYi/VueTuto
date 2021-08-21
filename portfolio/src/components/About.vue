<template>
  <div class="about MaterialCard">
    <div class="about-img ">
      <img src="../assets/아리.jpg" />
    </div>
    <div class="about-content">
      <div class="section-title ">
        <h2>
          Who am I?
        </h2>
      </div>
      <h3>Hello World! 개발자 이상헌입니다!</h3>
      <div class="about-text">
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
  width: 40%;
}

.about-content {
  width: 60%;
  padding-right: 30px;
}

p {
  display: block;
  color: var(--bs-grey300);
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
