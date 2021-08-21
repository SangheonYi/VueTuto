<template>
  <button class="TopButton" v-on:click="goTop">Top</button>
</template>

<script>
export default {
  name: "TopButton",
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.TopButton {
  position: fixed;
  bottom: 15px;
  right: 15px;
}

.ShowTopButton {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
