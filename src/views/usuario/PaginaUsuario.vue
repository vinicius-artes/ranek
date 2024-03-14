<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li><router-link :to="{ name: 'usuario' }">Produtos</router-link></li>
        <li><router-link :to="{ name: 'compras' }">Compras</router-link></li>
        <li><router-link :to="{ name: 'vendas' }">Vendas</router-link></li>
        <li><router-link :to="{ name: 'usuario-editar' }">Editar Usuário</router-link></li>
        <li><button @click.prevent="deslogar">Deslogar</button></li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>  
    </transition>
    <div>Pagina do usuário: {{  $store.state.usuario }}</div>
  </section>
  
</template>

<script>
export default {
  name: "PagimaUsuario",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  }

}
</script>

<style>

</style>