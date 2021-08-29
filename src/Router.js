import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Skill",
    name: "Skill",
    component: Skill,
  },
  {
    path: "/Project",
    name: "Project",
    component: Project,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  mode: history,
  routes,
  history: createWebHistory(),
});

export default router;
