import { createRouter, createWebHistory } from "vue-router";
import StudentView from "../views/StudentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Praticar",
      component: StudentView,
    },
    {
      path: "/acompanhar",
      name: "Acompanhar",
      component: () => import("../views/TeacherView.vue"),
    },
  ],
});

export default router;
