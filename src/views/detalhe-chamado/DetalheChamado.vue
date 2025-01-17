<template>
  <div class="containerDetalhe">
    <HeaderDetalheChamado
      :headerInfo="headerInfo"
    />
    <v-btn class="atenderChamado">Atender Chamado</v-btn>
    <div class="main">
      <CompartilharAtualizacao/>
      <div class="detalhes">
        <div class="detalhesChamado">
          Detalhes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDetalheChamado from '@/components/HeaderDetalheChamado.vue'
import CompartilharAtualizacao from '@/components/CompartilharAtualizacao.vue'

export default {
  name: "DetalheChamado",
  components: {
    HeaderDetalheChamado,
    CompartilharAtualizacao
  },
  data() {
    return {
      headerInfo: {
        codigo: '',
        status: '',
        proprietarioDoCaso: '',
        assunto: '',
        prioridade: '',
        dataAbertura: '',
        dataFechamento: ''
      }
    }
  }
}
</script>

<style scoped>
  .containerDetalhe {
    display: grid;
    grid-template-rows: 180px 50px 1fr;
    width: 95%;
    height: 100%;
    margin: 0px auto;
    border: 1px solid #D9D9D9;
  }
  .atenderChamado {
    width: 15%;
    justify-self: end;
    color: #ffffff;
    background: #429800;
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* border: 1px solid; */
    border-radius: 10px;
    margin-top: 20px;
  }
 
  .detalhesChamado {
    border: 1px solid;
    width: 90%;
    justify-self: center;
    margin-top: 10px;
  }

  </style>