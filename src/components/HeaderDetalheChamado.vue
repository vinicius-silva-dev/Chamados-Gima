<template>
  <header class="header">
      <div class="status">
        <div class="caso">
          <v-img class="imgCodigo" src="../img/Icons.svg"></v-img>
          <p>
            Caso <br>
            N° 03254
          </p>
        </div>
        <div class="statusCaso">
          <p>
            Status <br>
            {{headerInfo.status.value}}
          </p> 
        </div>
        <div class="propietarioChamado">
          <p>
            Proprietario do Caso <br>
            {{headerInfo.author}}
          </p>
        </div>
      </div>
      <div class="headerInfo">
        <div class="assunto">
          <p>
            Assunto <br>
            <span>{{headerInfo.title}}</span>
          </p>
        </div>
        <div class="prioridade">
          <p>
            Prioridade <br>
            <span>{{headerInfo.prioridade}}</span>
          </p>
        </div>
        <div class="dataAbertura">
          <p>
            Data/hora de abertura <br>
            <span>{{headerInfo.dataAbertura}}</span>
          </p>
        </div>
        <div class="dataFechamento">
          <p>
            Data/hora de fechamento <br>
            <span>-</span>
          </p>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "HeaderDetalheChamado",
  props: {
    headerInfo: {
      type: Object,
      defalt: () => {}
    }
  },
  data () {
    return {
    }
  },
  methods: {
    async getUser() {

    }
  }
}
</script>

<style scoped>
   /* header */
  .header {
    display: grid;
    grid-template-rows: 80px 80px;
    /* align-items: center; */
    /* border: 1px solid; */
  }

  /* header status */
  .status {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    border: 1px solid #f5f5f5;
  }
  
  .caso {
    width: 10%;
    display: flex;
    /* border: 1px solid; */
  }

  .statusCaso{
    text-align: center;
  }
  .propietarioChamado {
    margin-right: 20px;
    text-align: center;
  }

  /* header status */

  /* header info */
  .headerInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #D9D9D9;
  }

  .assunto {
    margin-left: 20px;
  }
  .dataFechamento {
    margin-right: 20px;
  }
  /* header info */
  /* header */
</style>