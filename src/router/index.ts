import { createRouter, createWebHistory } from "vue-router";
import CounterSetupPageVue from "@/counter/pages/CounterSetupPage.vue";
import CounterOptionsPage from "@/counter/pages/CounterOptionsPage.vue";
import ClientsLayout from "@/clients/layout/ClientsLayout.vue";
import ClientListPage from "@/clients/pages/ListPage.vue";
import ClientPage from "@/clients/pages/ClientPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "counter-one",
      component: CounterOptionsPage,
    },
    {
      path: "/counter2",
      name: "counter-two",
      component: CounterSetupPageVue,
    },
    {
      path: "/clients",
      name: "clients",
      component: ClientsLayout,
      redirect: { name: "list" },
      children: [
        { path: "list", name: "list", component: ClientListPage },
        { path: "/client/:id", name: "client-id", component: ClientPage }
      ]
    }
  ],
});

export default router;
