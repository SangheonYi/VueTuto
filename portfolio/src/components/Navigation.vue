<template>
  <nav class="navigation">
    <ul>
      <li v-for="entry in menus" :key="entry">
        <a v-bind:href="entry">
          {{ entry }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      menus: [`About`, `Skill`, `Project`],
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
  padding: 0;
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

.navigation {
  background-color: #424242;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
}

.navigation a {
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.navigation a:hover {
  color: black;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
