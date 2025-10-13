<template>
  <div class="containerTabela">
    <header class="header">
      <p>{{title}}</p>
      <v-img class="seta" src="../img/seta-down.png"></v-img>
    </header>
    <main class="chamados">
      <slot></slot>
      <!-- <div >
        <Chamado 
        />
      </div> -->
    </main>
  </div>
</template>

<script>
// import Chamado from "@/components/Chamado.vue"

export default {
  name: "TabelaChamados",
  props: {
    title: String,
    status: String
  }
}
</script>

<style scoped>
  .containerTabela {
    display: grid;
    grid-template-rows: 30px 550px;
    width: 18%;
    /* border: 1px solid; */
  }

  .header{
    width: 100%;
    background: #3C3E42;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0px 0px
    ;
  }
  .seta {
    max-width: 15px;
    cursor: pointer;
    /* border: 1px solid; */
    margin-right: 20px;
  }

  .header p{
    color: #ffffff;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 500;
  }
  .chamados {
    overflow-y: scroll;
    border: 1px solid  #d5d5d5;
    border-bottom: none;
  }

  @media only screen and (max-width: 1444px) {
    .containerTabela {
      width: 22%;
      
    }
  }
</style>