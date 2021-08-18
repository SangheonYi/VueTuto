<template>
  <div class="nav-container MaterialCard">
    <nav class="navigation ">
      <ul>
        <li v-for="entry in menus" :key="entry">
          <a v-bind:href="entry">
            {{ entry }}
          </a>
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
      menus: [`About.`, `Skill.`, `Project.`, `Contact.`],
    };
  },
  props: {},
  components: {},
  methods: {},
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
}

.navigation a {
  text-decoration: none;
  color: var(--bs-grey50);
  padding: 10px;
}

.navigation a:hover {
  color: var(--bs-grey800);
  padding: 15px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
