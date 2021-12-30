<template>
  <div>
    <ProjectInfo
      v-for="element in projects"
      :key="element"
      :project="element"
    />
  </div>
</template>

<script>
import ProjectInfo from "./ProjectInfo.vue";

const projects = [
  {
    name: "sayiOCR",
    screenshot: ["sayiocr_home.jpg"],
  },
  {
    name: "ft_transcendence",
    screenshot: ["Lobby.jpg"],
  },
  {
    name: "Mentta",
    screenshot: ["menttang.gif"],
  },
];
export default {
  name: "Project",
  data() {
    return { projects };
  },
  components: {
    ProjectInfo,
  },
};
</script>

<style></style>
