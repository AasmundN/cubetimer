import { createRouter, createWebHistory } from "vue-router"

import Login from "../views/Login.vue"

const routes = [
  {
    path: "/",
    name: "Root",
    component: Login,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
