import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaginaProduto from "../views/PaginaProduto.vue";
import PaginaLogin from "../views/PaginaLogin.vue";
import PaginaUsuario from "../views/usuario/PaginaUsuario.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue";
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue";
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue";
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue";

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
      component: PaginaUsuario,
      meta: {
        login: true,
      },
      children: [
        {
          path: "",
          name: "usuario",
          component: UsuarioProdutos,
        },
        {
          path: "compras",
          name: "compras",
          component: UsuarioCompras,
        },
        {
          path: "vendas",
          name: "vendas",
          component: UsuarioVendas,
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: UsuarioEditar,
        },
      ],
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavio: "smooth" });
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (!window.localStorage.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
