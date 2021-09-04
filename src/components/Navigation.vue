<template>
  <div class="nav-container">
    <nav class="navigation ">
      <ul>
        <li>
          <div>
            <router-link v-bind:to="base_url" class="Home">
              <span class="under-line" />
              Home.
            </router-link>
          </div>
        </li>
        <li v-for="entry in menus" :key="entry">
          <div>
            <router-link v-bind:to="base_url + entry" v-bind:class="entry">
              <span class="under-line" />
              {{ entry }}.
            </router-link>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import debounce from "lodash/debounce";

const base_url = process.env.BASE_URL;
export default {
  name: "Navigation",
  data() {
    return {
      menus: [`About`, `Contact`, `Skill`, `Project`],
      base_url,
    };
  },
  props: {},
  components: {},
  methods: {
    widenNavigationBar() {
      const bar = document.querySelector(".nav-container");
      const widenBar = `WidenBar`;
      if (window.scrollY > 50) {
        bar.classList.add(widenBar);
      } else if (window.scrollY < 50) {
        bar.classList.remove(widenBar);
      }
    },
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.widenNavigationBar, 50);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  margin-right: 1.6rem;
}

li {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  margin: 0 5px;
  margin-top: 0px;
  margin-right: 5px;
  margin-bottom: 0px;
  margin-left: 5px;
}

.nav-container {
  top: 0px;
  position: sticky;
  padding: 5px;
  background-color: var(--bs-grey803);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.under-line {
  position: absolute;
  border: 2px solid transparent;
  left: 0px;
  bottom: -10px;
  width: 0;
}

.navigation a:hover .under-line {
  width: 100%;
  transition: all 0.3s;
}

.navigation .Home:hover .under-line {
  background-color: var(--rally-blue);
  border: 2px solid var(--rally-blue);
}

.navigation .About:hover .under-line {
  background-color: var(--rally-green);
  border: 2px solid var(--rally-green);
}

.navigation .Skill:hover .under-line {
  background-color: var(--rally-orange);
  border: 2px solid var(--rally-orange);
}

.navigation .Project:hover .under-line {
  background-color: var(--rally-yellow);
  border: 2px solid var(--rally-yellow);
}

.navigation .Contact:hover .under-line {
  background-color: var(--rally-purple);
  border: 2px solid var(--rally-purple);
}

.navigation a {
  text-decoration: none;
  color: var(--bs-grey50);
  padding: 10px;
}

.navigation a:hover {
  color: var(--bs-grey500);
  padding: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.WidenBar {
  background-color: transparent;
  width: inherit;
  margin: 0%;
}
</style>
