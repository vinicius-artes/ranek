<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div class="produtos-wrapper" v-for="(venda, index) in vendas" :key="index">
        <ProdutoItem v-if="venda.produto" :produto="venda.produto">
          <p class="vendedor">
            <span>Comprador:</span>
            {{ venda.comprador_id }}
          </p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="venda.endereco">
            <li v-for="(value, key) in venda.endereco" :key="key">
            {{ key }}: {{ value }}</li>
          </ul>
        </div>
      </div>
    </div>
    <PaginaCarregando v-else />
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapState } from "vuex";
import ProdutoItem from "@/components/ProdutoItem.vue";
export default {
  components: {
    ProdutoItem
  },
  data() {
    return {
      vendas: null
    }
  },
  computed: {
    ...mapState(["usuario", "login"])
  },
  methods: {
    getVendas() {
      api.get("/transacao?tipo=vendedor_id").then(response => {
        this.vendas = response.data;
      })
    }
  },
  watch: {
    login() {
      this.getVendas();
    }
  },
  created() {
    if(this.login) {
      this.getVendas();
    }
    document.title = "Usuário | Vendas";
  }
}
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}
.vendedor span {
  color: #e80;
}
.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 60px;
}
h2 {
  margin-bottom: 20px;
}
h3 {
  margin: 0px;
  justify-self: end;
}
@media (max-width: 500px) {
  .entrega {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>