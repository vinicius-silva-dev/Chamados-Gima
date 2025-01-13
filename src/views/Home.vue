<template>
  <div class="container">
    <Header/>
    <SelectLojas/>
    <main class="chamados">
      <TabelaChamados
        title="Aberto"
        status="Aberto"
      >
        <div v-for="chamado in listChamados" :key="chamado.status">
          <Chamado 
            v-if="chamado.status == 'Aberto'"
            :prioridade="chamado.prioridade"
          />
        </div>
      </TabelaChamados>

      <TabelaChamados
        title="Em Atendimento"
      >
        <div v-for="chamado in listChamados" :key="chamado.status">
          <Chamado 
            v-if="chamado.status == 'Em Atendimento'"
            color="#FF0000"
            class="colorChamado"
            :prioridade="chamado.prioridade"
          />
        </div>
      </TabelaChamados>

      <TabelaChamados
        title="Resolvido"
        status="Resolvido"
      >
        <div v-for="chamado in listChamados" :key="chamado.status">
          <Chamado v-if="chamado.status == 'Resolvido'"/>
        </div>
      </TabelaChamados>

      <TabelaChamados
        title="Cancelado"
        status="Cancelado"
      >
         <div v-for="chamado in listChamados" :key="chamado.status">
          <Chamado v-if="chamado.status == 'Cancelado'"/>
        </div>
      </TabelaChamados>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import TabelaChamados from '@/components/TabelaChamados.vue'
 import Chamado from "@/components/Chamado.vue"
 import SelectLojas from "@/components/SelectLojas.vue"


export default {
  name: 'HomeView',
  components: {
    Header,
    TabelaChamados,
    Chamado,
    SelectLojas
  },
  data() {
    return {
      listChamados: [
        {
          status: "Aberto",
          prioridade: "Medio"
        },
        {
          status: "Em Atendimento",
          prioridade: "Alto"
        },
        {
          status: "Aberto",
          prioridade: "Baixo"
        },
        {
          status: "Em Atendimento",
          prioridade: "Medio"
        },
        {
          status: "Aberto",
          prioridade: "Medio"
        },
        {
          status: "Aberto",
          prioridade: "Medio"
        },
      ]
    }
  },
  // computed: {
  //   bgColor() {
  //     return this.
  //   }
  // }
}
</script>

<style scoped>
  .chamados {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    min-height: 470px;
    max-height: 600px;
  }
  .colorChamado{
    color: #FFF;
  }
</style>
