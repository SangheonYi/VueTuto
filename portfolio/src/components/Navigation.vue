<template>
  <div class="nav-container MaterialCard">
    <nav class="navigation ">
      <ul>
        <li v-for="entry in menus" :key="entry">
          <div>
            <router-link v-bind:to="entry" v-bind:class="entry">
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
export default {
  name: "Navigation",
  data() {
    return {
      menus: [`Home`, `About`, `Skill`, `Project`, `Contact`],
    };
  },
  props: {},
  components: {},
  methods: {
    widenNavigationBar() {
      const bar = document.querySelector(".nav-container");
      const widenBar = `WidenBar`;
      if (window.scrollY > 100) bar.classList.add(widenBar);
      else if (window.scrollY < 100) bar.classList.remove(widenBar);
    },
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
  width: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
