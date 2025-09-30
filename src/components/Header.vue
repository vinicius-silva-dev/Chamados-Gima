<template>
  <header class="containerHeader">
    <div class="header">
      <v-img 
        class="imgHeader"
        src="../img/header.png"
        @click="homePage"
      ></v-img>
      <div class="perfil">
        <div class="nameUser">
          <div class="imgPerfil" @click="this.showCard = !this.showCard">
            <span>{{sigla}}</span>
          </div>
          <p>{{nameUser}}</p>
          <v-icon color="white" @click="this.showCard = !this.showCard">mdi-arrow-down</v-icon>
        </div>
        <v-card
          v-if="showCard"
          max-width="300px"
          class="card"
          :title="nameUser"
        >

          <v-card-text>
            <router-link to="/login" @click="logout">Sair</router-link>
          </v-card-text>

        </v-card>
      </div>
    </div>
    <nav class="navigation">
      <div class="nav">
        <ul>
          <li>
            <div @click="homePage" class="homePage">Inicio</div>
            <!-- <span
              class="sublinhado"
             ></span> -->
          </li>
          <li>
            <div @click="newCasePage" class="homePage">Novo Caso</div>
            <!-- <span class="showSublinhado"></span> -->
          </li>
          <!-- <li class="casos">
            <v-select 
              label="Casos"
              :items="statusChamado"
              colo="#FFF"
              variant="underlined"
            />
          </li> -->
          <li>
            <div @click="userPage" class="homePage">Usuários</div>
            <!-- <span class="showSublinhado"></span> -->
          </li>
        </ul>
      </div>

      <!-- <div 
        v-if="showPesquisa"
        class="pesquisa"
      >
        <input 
          class="input-pesquisa"

          type="text"
          placeholder="Pesquise nesta lista">
      </div> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderView',
  props: {
    nameUser: {
      type: String,
      default: 'Vinicius Silva Souza'
    }
  },
  data() {
    return {
      statusChamado: ["Casos em aberto", "Casos em andamento", "Casos Resolvidos", "Casos Cancelados"],
      showCard: false
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
    sigla() {
      return this.nameUser.slice(0,2).toUpperCase()
    }
  },
  methods: {
    async homePage() {
      await this.$router.push('/home')
      window.location.reload()
    },

    async newCasePage() {
      await this.$router.push('/home/novocaso')
      window.location.reload()
    },
    async userPage() {
      await this.$router.push('/gerenciadorusuarios')
      window.location.reload()
    },
    logout() {
      window.localStorage.removeItem('logado')
      window.localStorage.removeItem('nameUser')
      window.localStorage.removeItem('token')
      this.$router.push('/login')
    }


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
    margin-bottom: 0px;
    /* border: 1px solid; */
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    background: #3C3E42;
  }
  .imgHeader {
    max-width: 14%;
    /* border: 1px solid #FF1430; */
    height: 110px;
    margin-left: 50px;
  }

  .navigation {
    display: flex;
    justify-content: center;
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
    justify-content: center;
    /* height: 100%; */
    gap: 100px;
    align-items: center;
    /* margin-left: 50px; */
    /* border: 1px solid; */
  }
  .casos{
    width: 200px;
    /* border: 1px solid; */
  }
  .nav ul li a{
    font-weight: 600;
  }
  .nav ul li {
    display: grid;
    grid-template-rows: 1fr 5px;
    height: 100%;
    align-items: center;
    font-size: 20px;
    /* border: 1px solid; */

  }
  .nav ul li:hover{
    transform: scale(1.14);
    transition: transform 0.1s ease;
  }
  .nav ul li a:hover{
    color: #FF1430;
    box-shadow: 0px 2px 0px 0px #3C3E42;
  }


  .homePage{
    cursor: pointer;
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
    display: grid;
    position: relative;
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

  .nameUser {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* border: 1px solid; */
    /* width: 20%; */
    height: 50px;
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

  .card {
    position: absolute;
    top: 50px;
    right: 10px;
    z-index: 2;
    justify-self: end;
    align-self: start;
    width: 70%;
  }
</style>