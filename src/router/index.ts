import CounterOnePageVue from "@/counter/pages/CounterOnePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "counter-one",
      component: CounterOnePageVue,
    },
  ],
});

export default router;
