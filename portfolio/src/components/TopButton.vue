<template>
  <div
    class="TopButton MaterialCard"
    v-on:click="goTop"
    v-on:scroll.passive="showTopButton"
  >
    Top
    <div class="triangle-button"></div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
export default {
  name: "TopButton",
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    showTopButton() {
      const topButton = document.querySelector(".TopButton");
      const showTopButton = `ShowTopButton`;
      if (window.scrollY > 100) topButton.classList.add(showTopButton);
      else if (window.scrollY < 100) topButton.classList.remove(showTopButton);
    },
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.showTopButton, 50);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
};
</script>

<style scoped>
.TopButton {
  position: fixed;
  bottom: 15px;
  right: -180px;
  background-color: var(--rally-green);

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.TopButton:hover {
  border: 0px solid #000;
  background-color: var(--rally-dark-green);
}

.ShowTopButton {
  right: -70px;
}
</style>
