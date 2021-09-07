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
        <h2>
          Sangheon Yi
        </h2>
        <h3>Software Developer</h3>
        <p>
          수학, 컴퓨터 공학 학사 학위 취득 후 교육 프로그램 42Seoul 공통 과정을
          수료했습니다. 문제해결 과정에서 발생하는 다양한 어려움을 이겨내고
          느끼는 성취감을 좋아합니다. 동료들과의 끊임 없는 소통이 특기입니다.
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
  width: 210px;
  height: 280px;
  padding: 20px;
}

.about-content {
  width: 80%;
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
