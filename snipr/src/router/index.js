import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import Dashboard from "../pages/Dashboard.vue";
import Translate from "../pages/Translate.vue";
import NewSnippet from "../pages/NewSnippet.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/dashboard", component: Dashboard },
  { path: "/translate", component: Translate },
  { path: "/new", component: NewSnippet },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
