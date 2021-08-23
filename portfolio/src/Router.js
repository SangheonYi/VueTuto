import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/About",
    name: "About",
    component: () => import("./components/About.vue"),
  },
  {
    path: "/Skill",
    name: "Skill",
    component: () => import("./components/Skill.vue"),
  },
  {
    path: "/Project",
    name: "Project",
    component: () => import("./components/Project.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("./components/Contact.vue"),
  },
];

const router = createRouter({
  mode: history,
  routes,
  history: createWebHistory(),
});

export default router;
