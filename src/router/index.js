import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaginaProduto from "../views/PaginaProduto.vue";
import PaginaLogin from "../views/PaginaLogin.vue";
import PaginaUsuario from "../views/usuario/PaginaUsuario.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: PaginaProduto,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: PaginaLogin,
    },
    {
      path: "/usuario",
      name: "usuario",
      component: PaginaUsuario,
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavio: "smooth" });
  },
});

export default router;
