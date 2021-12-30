<template>
  <div class="project-container">
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
    description:
      "OCR과 TTS를 사용한 대량의 이미지를 한 번에 변환하고 읽어주는 안드로이드 앱입니다.",
    git: "https://github.com/SangheonYi/OCRTTS-for-android",
  },
  {
    name: "Bye blackhole",
    screenshot: ["Lobby.jpg"],
    description:
      "웹 기반 Pong 게임 프로젝트입니다. 실시간 관람, 채팅, 랜덤 매칭 등의 기능이 있습니다.",
    git: "https://github.com/SangheonYi/bye_blackhole",
  },
  {
    name: "Mentta",
    screenshot: ["menttang.gif"],
    description: "Browserquest 기반 메타버스 환경 프로젝트입니다.",
    git: "https://github.com/innohack2021/mentta",
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

<style>
.project-container {
  display: flex;
}
</style>
