<template>
  <div class="containerDetalhe">
    <HeaderDetalheChamado
      :headerInfo="headerInfo"
    />
    <v-btn
      v-show="showBtnAtenderChamado"
      class="atenderChamado"
      @click="atender"
    >
      Atender Chamado
    </v-btn>
 
    <ModalDialog
      v-model:showModal="showModal"
      @compartilhar="encerrar"
      @cancelarChamado="cancelar"
      :tipoOperacao="tipoOperacao"
      
    />
    <main class="main">
      <CompartilharAtualizacao 
        @criarAtualizacao="atualizacaoChamado"
        :atualizacao="atualizacao"
        @showModal="openModal"
      />
      <InformacoesCaso
        :title="headerInfo.title"
        :descricao="headerInfo.descricao"
        :author="headerInfo.author"
        :email="headerInfo.email"
        :telefone="headerInfo.telefone"
        :loja="headerInfo.loja"
      />
    </main>
  </div>
</template>

<script>
import HeaderDetalheChamado from '@/components/HeaderDetalheChamado.vue'
import CompartilharAtualizacao from '@/components/CompartilharAtualizacao.vue'
import InformacoesCaso from '@/components/InformacoesCaso.vue'
import ModalDialog from '@/components/ModalDialog.vue'
import {jwtDecode} from "jwt-decode"
import { mapActions, mapState } from 'vuex'
import dayjs from "dayjs";

export default {
  name: "DetalheChamado",
  components: {
    HeaderDetalheChamado,
    CompartilharAtualizacao,
    InformacoesCaso,
    ModalDialog
  },
  data() {
    return {
      categoriaUser: '',
      compartilharAtualizacao: {
        descricao: '',
        anexosIds: []
      },
      atualizacao: [],
      showModal: false,
      author: '',
      tipoOperacao: '',
      headerInfo: {
        codigo: '',
        status: '',
        author: '',
        email: '',
        title: '',
        descricao: '',
        prioridade: '',
        telefone: '',
        loja: '',
        dataAbertura: '',
        dataFechamento: ''
      }
    }
  },
  async created() {
    await this.getChamado()
    await this.findUser()
    await this.getAtualizacaoChamado()

    // const token = window.localStorage.getItem("token")
    // const authorId = this.decodificarToken(token).sub

  },
  computed: {
    ...mapState('chamados',['chamado']),
    ...mapState('users',['getUser']),

    showBtnAtenderChamado() {
      return this.headerInfo.status.value === 'Aberto' && this.categoriaUser === 'analista' ? true : false
    }
  },
  methods: {
    ...mapActions('chamados' ,['getChamadoById', 'createAtualizacao', 'getAtualizacao', 'atenderChamado', 'encerrarChamado', 'cancelarChamado']),
    ...mapActions('users', ['getUserById']),

    async getChamado() {
      const token = window.localStorage.getItem("token")
      const chamadoId = this.$route.params.id
      
      
      const result = await this.getChamadoById({chamadoId, token})

      if(result === 401) {
        this.$router.push("/login")
      } else {

        const formatted = dayjs(this.chamado.props.createdAt)
          .locale("pt-br")
          .format("DD/MM/YYYY HH:mm:ss");
  
        this.headerInfo.status = this.chamado.props.status
        this.headerInfo.loja = this.chamado.props.loja
    
        this.headerInfo.title = this.chamado.props.title
        this.headerInfo.descricao = this.chamado.props.descricao
        this.headerInfo.prioridade = this.chamado.props.prioridade
        this.headerInfo.telefone = this.chamado.props.telefone
        this.headerInfo.dataAbertura = formatted
        // this.headerInfo.dataFechamento = this.chamado.status
        
      }

    },

    async findUser() {
      const userId = this.chamado.props.userId
      const token = window.localStorage.getItem("token")
      
      const user = await this.getUserById({userId, token})
      
      this.headerInfo.author = user.props.name
      this.headerInfo.email = user.props.email
      this.categoriaUser = window.localStorage.getItem("perfil")
     
    },

    async atualizacaoChamado(event) {
      
      const token = window.localStorage.getItem("token")
      const chamadoId = this.$route.params.id

      const payload = this.decodificarToken(token)

      // this.compartilharAtualizacao.descricao = event

      // console.log(this.compartilharAtualizacao)
      const dataAtualizacao = {
        chamadoId,
        authorId: payload?.sub,
        token,
        descricao: event,
        anexosIds: []
      }

      console.log(dataAtualizacao)
      const result = await this.createAtualizacao(dataAtualizacao)

      if(result) {
        window.location.reload()
      }
      // console.log(result.props.descricao)
      return result
    },

    async getAtualizacaoChamado() {
      const token = window.localStorage.getItem("token")
      const chamadoId = this.$route.params.id

      const result = await this.getAtualizacao({chamadoId, token})
      this.atualizacao = result.atualizacao.reverse()

      result.atualizacao.forEach(async(item) => {
        const userId = item.props.id
        const user = await this.getUserById({userId, token})

        if(user) {
          this.author = user.props.name
        }
      })

      
    },

    async atender() {
      const token = window.localStorage.getItem("token")
      const chamadoId = this.$route.params.id

      const payload = this.decodificarToken(token)

      const data = {
        chamadoId,
        analistaId: payload?.sub,
        token,
        status: "Atendimento"
      }
      console.log('componente: ', data)
      const result = await this.atenderChamado(data)

      if(result) {
        this.$router.push("/home").then(() => window.location.reload())
        // window.location.reload()
      }
    },

    async encerrar(event) {
      const token = window.localStorage.getItem("token")
      const chamadoId = this.$route.params.id

      const payload = this.decodificarToken(token)

      const data = {
        chamadoId,
        analistaId: payload?.sub,
        token,
        descricaoEncerramento: event
      }
      
      const result = await this.encerrarChamado(data)

      if(result) {
        this.$router.push("/home").then(() => window.location.reload())
        // window.location.reload()
      }
    },
    async cancelar(event) {
      const token = window.localStorage.getItem("token")
      const chamadoId = this.$route.params.id

      const data = {
        chamadoId,
        token,
        descricao: event
      }
      
      await this.cancelarChamado(data)

      // if(result) {
      //   this.$router.push("/home").then(() => window.location.reload())
      //   // window.location.reload()
      // }
    },

    openModal(event) {
      this.showModal = true
      this.tipoOperacao = event
      console.log(this.showModal, this.tipoOperacao) 
    },

    decodificarToken(token) {
      try {
        const decoded = jwtDecode(token);
        
        return decoded;
      } catch (error) {
        console.error("Token inválido", error);
        return null;
      }
    },
  }
}
</script>

<style scoped>
  .containerDetalhe {
    /* display: grid;
    grid-template-rows: 180px 50px 1fr; */
    /* position: relative; */
    font-family: 'Roboto', sans-serif;
    width: 95%;
    margin: 0px auto;
    /* border: 1px solid #D9D9D9; */
  }
  .atenderChamado {
    width: 15%;
    left: 84%;
    color: #ffffff;
    background: #429800;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    height: 100%;
  }
 
 @media only screen and (max-width: 1444px) {

 }
  /* .detalhesChamado {
    border: 1px solid;
    width: 90%;
    justify-self: center;
    margin-top: 10px;
  } */

  </style>