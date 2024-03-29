<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutosBuscar />
    <ProdutoLista />
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue"
import ProdutoLista from "@/components/ProdutoLista.vue"
export default {
  name: 'HomeView',
  components: {
    ProdutosBuscar,
    ProdutoLista
  },
  created() {
    document.title = "Ranek";
  }
}
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
