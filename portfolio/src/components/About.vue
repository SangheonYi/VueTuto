<template>
  <div class="about">
    <div class="about-img">
      <img src="../assets/아리.jpg" />
    </div>
    <div class="about-text">
      I'm sayi
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
.Notcontainer {
  display: flex;
  border: 1px dotted red;
  padding: 10px;
}

.item {
  border: 1px solid green;
  padding: 10px;
}
.about {
  display: flex;
}
</style>
