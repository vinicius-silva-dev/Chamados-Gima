<template>
  <div class="container">
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
  .container {
    display: grid;
    grid-template-rows: 50px 1fr;
    width: 20%;
    max-height: 80%;
    /* border: 1px solid; */
  }

  .header{
    width: 100%;
    background: #3C3E42;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-radius: 10px */
    ;
  }
  .seta {
    max-width: 40px;
    cursor: pointer;
    /* border: 1px solid; */
    margin-right: 20px;
  }

  .header p{
    color: #ffffff;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 500;
  }
  .chamados {
    overflow-y: scroll;
    border: 1px solid  #d5d5d5;
  }

  @media only screen and (min-width: 1444px) {
    .container {
      width: 22%;
      
    }
  }
</style>