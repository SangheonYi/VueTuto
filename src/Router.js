import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";

const routes = [
  {
    path: `${process.env.BASE_URL}`,
    name: "Home",
    component: Home,
  },
  {
    path: `${process.env.BASE_URL}About`,
    name: "About",
    component: About,
  },
  {
    path: `${process.env.BASE_URL}Skill`,
    name: "Skill",
    component: Skill,
  },
  {
    path: `${process.env.BASE_URL}Project`,
    name: "Project",
    component: Project,
  },
  {
    path: `${process.env.BASE_URL}Contact`,
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
