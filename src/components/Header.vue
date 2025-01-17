<template>
  <header class="containerHeader">
    <div class="header">
      <v-img class="imgHeader" src="../img/header.png"></v-img>
      <div class="perfil">
        <div class="imgPerfil">
          <span>VS</span>
        </div>
        <p>Vinicius Silva Souza</p>
      </div>
    </div>
    <nav class="navigation">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/home">Inicio</router-link>
            <!-- <span
              class="sublinhado"
             ></span> -->
          </li>
          <li>
            <router-link to="/novocaso">Novo Caso</router-link>
            <!-- <span class="showSublinhado"></span> -->
          </li>
          <li class="casos">
            <v-select 
              label="Casos"
              :items="statusChamado"
              hide-details
            />
          </li>
          <li>
            <router-link to="/contatos">Contatos</router-link>
            <!-- <span class="showSublinhado"></span> -->
          </li>
        </ul>
      </div>

      <div 
        v-if="showPesquisa"
        class="pesquisa"
      >
        <input 
          class="input-pesquisa"

          type="text"
          placeholder="Pesquise nesta lista">
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      statusChamado: ["Casos em aberto", "Casos em andamento", "Casos Resolvidos", "Casos Cancelados"],
    }
  },
  computed: {
    showPesquisa() {
      const url = window.location.pathname

      if(url != '/home') {
        return false
      }

      return true
    },
    // showSublinhado() {
    //   const url = window.location.pathname
    //   if(url === this.$refs) {
    //     return 'sublinhado'
    //   }
    //   return false

    // },
  },
  methods: {
    // showSublinhado() {

    //   if (this.sublinhado) {
    //     this.sublinhado = false
    //   }


    //   console.log(this.$refs.home)
    // }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .containerHeader {
    width: 100%;
    height: 200px;
    
    /* border: 1px solid; */
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55%;
    background: #3C3E42;
  }
  .imgHeader {
    max-width: 15%;
    /* border: 1px solid #FF1430; */
    height: 130px;
    margin-left: 50px;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30%;
    background: #FF1430;
  }
  .nav {
    display: flex;
    align-items: center;
    width: 45%;
    height: 100%;
    /* border: 1px solid; */
    color: #FFFFFF;
  }
  .nav ul {
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-left: 50px;
    /* border: 1px solid; */
  }
  .casos{
    width: 150px;
  }
  .nav ul li a{
    font-weight: 400;
    color: #FFFFFF;
  }
  .nav ul li {
    display: grid;
    grid-template-rows: 1fr 5px;
    height: 100%;
    align-items: center;
    /* border: 1px solid; */

  }
  .nav ul li:hover{
    box-shadow: 0px 2px 0px 0px #3C3E42;
  }
  .sublinhado {
    width: 100%;
    height: 2px;
    background: #FFFFFF;
  }

  .pesquisa {
    width: 15%;
    display: grid;
    /* border: 1px solid; */
    margin-right: 30px;
  }
  .input-pesquisa {
    width: 100%;
    height: 50%;
    align-self: center;
    border: 1px solid #3C3E42; 
    border-radius: 50px;
    padding: 10px;
    font-size: 12px;
    background: #FFFFFF; 
  }

  .perfil {
    display: flex;
    /* border: 1px solid #FFFFFF; */
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 20%;
    height: 50px;
  }
  .perfil p {
    color: #FFFFFF;
    font-size: 16px;
  }

.imgPerfil{
  width: 40px;
  height: 40px;
  display: grid;
  align-items: center;
  /* border: 1px solid #FFFFFF; */
  background: #FFFFFF;
  border-radius: 50px;
  text-align: center;
  font-size: 18px;
}
</style>