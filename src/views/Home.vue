<template>
  <div >
    <div class="container">
      <Header/>
      <!-- <SelectLojas
        v-if="showchamados"
      /> -->
      <main 
        class="chamados"
        v-if="showchamados"
      >
        <TabelaChamados
          title="Aberto"
          status="Aberto"
        >
          <div v-for="chamado in listChamados" :key="chamado.props.status.value">
            
            <!-- <div v-if="!chamado">
              <p>Não tem chamados</p>
            </div> -->
            <Chamado 
              v-if="chamado.props.status.value == 'Aberto'"
              :title="chamado.props.title"
              :descricao="chamado.props.descricao"
              :prioridade="chamado.props.prioridade"
              :id="chamado._id.value"
            />
            
          </div>
        </TabelaChamados>

        <TabelaChamados
          title="Em Atendimento"
        >
          <div v-for="chamado in listChamados" :key="chamado.props.status.value">
            <Chamado 
              v-if="chamado.props.status.value == 'Atendimento'"
              color="#FF0000"
              class="colorChamado"
              :title="chamado.props.title"
              :descricao="chamado.props.descricao"
              :prioridade="chamado.props.prioridade"
              :id="chamado._id.value"
          
            />
          </div>
        </TabelaChamados>

        <TabelaChamados
          title="Resolvido"
          status="Resolvido"
        >
          <div v-for="chamado in listChamados" :key="chamado.props.status.value">
            <Chamado 
              v-if="chamado.props.status.value == 'Resolvido'"
              :title="chamado.props.title"
              :descricao="chamado.props.descricao"
              :prioridade="chamado.props.prioridade"
              :id="chamado._id.value" 
            />
          </div>
        </TabelaChamados>

        <TabelaChamados
          title="Cancelado"
          status="Cancelado"
        >
          <div v-for="chamado in listChamados" :key="chamado.status">
            <Chamado 
              v-if="chamado.props.status.value == 'Cancelado'"
              :title="chamado.props.title"
              :descricao="chamado.props.descricao"
              :prioridade="chamado.props.prioridade"
              :id="chamado._id.value"
            />
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
// import SelectLojas from "@/components/SelectLojas.vue"
import Footer from "@/components/Footer.vue"
import {jwtDecode} from "jwt-decode"
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Header,
    TabelaChamados,
    Chamado,
    // SelectLojas,
    Footer
  },
  data() {
    return {
      listChamados: [],
    }
  },


  async created() {
    if(window.localStorage.perfil === 'analista') {
      await this.listarTodosChamados()
      this.listChamados.push(... this.chamados)
    } else {
      await this.listarChamados()
      this.listChamados.push(... this.chamados)
    }

   
  },

  computed: {
    ...mapState('chamados',['chamados', 'chamadosAll']),
     showchamados() {
      const url = window.location.pathname

      if(url != '/home') {
        return false
      }
      // window.location.reload()
      return true
    },
  },

  methods: {
    ...mapActions('chamados' ,['getChamados', 'getChamadosAll']),
    ...mapActions('users', ['getUserById']),

    async listarChamados() {
      const token = window.localStorage.getItem("token")

      const payload = this.decodificarToken(token);

      const data = {
        id: payload?.sub,
        token
      }

      const chamados = await this.getChamados(data)
      console.log(chamados)
      if(chamados === 401) {
        this.$router.push("/login")
      }

    },

    async listarTodosChamados() {
      const token = window.localStorage.getItem("token")

      const payload = this.decodificarToken(token);
      // const analistaId = payload.sub

      // const isUser = await this.getUserById({analistaId})
      const data = {
        id: payload?.sub,
        token
      }
      const chamados = await this.getChamadosAll(data)
      
      if(chamados === 401) {
        this.$router.push("/login")
      }
      // if(isUser.props.categoria === 'Analista') {
      // }
    },

    async detailsCase() {
      await this.$router.push(`/home/detalhechamado/${this.id}`)
      window.location.reload()
    }, 
    decodificarToken(token) {
      try {
        const decoded = jwtDecode(token);
        
        return decoded;
      } catch (error) {
        console.error("Token inválido", error);
        return null;
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-rows: auto auto auto, 1fr;
    
  }
  /* .detalheChamado {
    grid-row: 2 !important;
  }
  .footer {
    grid-row: 3;
  } */
  .chamados {
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 20px;
    min-height: 600px;
    max-height: 850px;
  }
  .colorChamado{
    color: #FFF;
  }

  .footer {
    align-self: end;
    margin-top: 100px;
  }

  @media only screen and (max-width: 1444px) {
    .footer {
      grid-column: 4;
    }
  }
</style>
