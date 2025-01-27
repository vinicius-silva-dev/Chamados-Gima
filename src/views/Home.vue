<template>
  <div >
    <div class="container">

      <Header/>
      <SelectLojas
        v-if="showchamados"
      />
      <main 
        class="chamados"
        v-if="showchamados"
      >
        <TabelaChamados
          title="Aberto"
          status="Aberto"
        >
          <div v-for="chamado in listChamados" :key="chamado.status">
            <Chamado 
              v-if="chamado.status == 'Aberto'"
              :prioridade="chamado.prioridade"
              :id="chamado.id"
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
              :id="chamado.id"
          
            />
          </div>
        </TabelaChamados>

        <TabelaChamados
          title="Resolvido"
          status="Resolvido"
        >
          <div v-for="chamado in listChamados" :key="chamado.status">
            <Chamado 
            v-if="chamado.status == 'Resolvido'" 
            />
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
      <router-view class="detalheChamado"/>
      <Footer class="footer"/>

    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import TabelaChamados from '@/components/TabelaChamados.vue'
 import Chamado from "@/components/Chamado.vue"
 import SelectLojas from "@/components/SelectLojas.vue"
 import Footer from "@/components/Footer.vue"


export default {
  name: 'HomeView',
  components: {
    Header,
    TabelaChamados,
    Chamado,
    SelectLojas,
    Footer
  },
  data() {
    return {
      listChamados: [
        {
          id: 'kdkdfk454',
          status: "Aberto",
          prioridade: "Medio"
        },
        {
          id: 'kdkdfddk454',
          status: "Em Atendimento",
          prioridade: "Alto"
        },
        {
          id: 'kdadfvkdfk454',
          status: "Aberto",
          prioridade: "Baixo"
        },
        {
          id: 'kdkdfk4vfvf541223',
          status: "Em Atendimento",
          prioridade: "Medio"
        },
        {
          id: 'kdkdfk45wever3444',
          status: "Aberto",
          prioridade: "Medio"
        },
        {
          id: 'kdkdfk4adsvr32354',
          status: "Aberto",
          prioridade: "Medio"
        },
      ]
    }
  },
  created() {
    // if(window.location.pathname === '/home') {

    //   // window.location.reload()
    // }
  },
  computed: {
     showchamados() {
      const url = window.location.pathname

      if(url != '/home') {
        return false
      }
      
      return true
    },
  }, methods: {
    async detailsCase() {
      await this.$router.push(`/home/detalhechamado/${this.id}`)
      window.location.reload()
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100vh;
    display: grid;
    /* grid-template-rows: 25% 100% 25%; */
  }
  /* .detalheChamado {
    grid-row: 2 !important;
  }
  .footer {
    grid-row: 3;
  } */
  .chamados {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    min-height: 470px;
    max-height: 550px;
  }
  .colorChamado{
    color: #FFF;
  }

  .footer {
    align-self: end;
  }
</style>
