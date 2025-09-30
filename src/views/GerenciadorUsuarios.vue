<template>
  <div class="container">
    <Header/>
    <main class="tabelaUser">
      <TabelaUsuarios
        @viewUser="viewUser"
        @openModalForDeleteUser="openModalForDeleteUser"
        :items="items"
      >
        <template>
          <v-dialog
            v-if="editingUser"
            v-model="showModal"
            max-width="500"
          >
            <v-card class="card" >
              <div class="headerCard">
                <!-- <v-img class="imgListrado" src="../img/listras-fiat.png"></v-img> -->
                <h3>Editar usuário</h3>
                <v-icon 
                  size="x-large"
                  color="red"
                  @click="showModal = false"
                >
                  mdi-close
                </v-icon>
              </div>
              <div 
                class="form"
              >
                <div class="containerInput">
                  <label :style="{fontWeight: 600}">Nome</label>
                  <input 
                    type="text"
                    class="input"
                    v-model="user.name"
                  >
                  <label :style="{fontWeight: 600}">Email</label>
                  <input 
                    type="email"
                    class="input"
                    v-model="user.email"
                  >
                  <label :style="{fontWeight: 600}">Loja</label>
                  <input 
                    type="text"
                    class="input"
                    v-model="user.loja"
                  >
                  <label :style="{fontWeight: 600}">Senha</label>
                  <input 
                    type="text"
                    class="input"
                    v-model="user.password"
                  >
                </div>
                
              </div>
              <div class="btn">
                <v-btn color="red">Cancelar</v-btn>
                <v-btn color="success" @click="editUser(user.id)">Salvar</v-btn>
              </div>
            </v-card>

          </v-dialog>
          <v-dialog
            v-else
            v-model="showModal"
            max-width="500"
          >
            <v-card class="card">
              <v-card-title class="text-h5">Deseja excluir este usuário?</v-card-title>
              <div class="btn">
                <v-btn color="red">Cancelar</v-btn>
                <v-btn color="success" @click="deleteUser(user.id)">Ok</v-btn>
              </div>

            </v-card>
          </v-dialog>
        </template>
      </TabelaUsuarios>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TabelaUsuarios from '@/components/UserTable.vue'
import Footer from '@/components/Footer.vue'

export default {
  name:"gerenciadorUsuarios",
  components: {
    Header,
    TabelaUsuarios,
    Footer
  },
  data() {
    return {
      headers: [],
      items: [
        {
          id: 'user-1',
          name: 'Vinicius Silva Souza',
          email: 'suporteti_jaru@fiatgima.com.br',
          loja: 'Fiat Gima Jaru',
          password: '123456'
        },
        {
          id: 'user-2',
          name: 'Mario Silva Souza',
          email: 'suporteti_jaru@fiatgima.com.br',
          loja: 'Fiat Gima Jaru',
          password: '123456'
        },
      ],
      user: {},
      changedUser: {
        name: '',
        email: '',
        loja: '',
        password: ''
      },
      showModal: false,
      editingUser: false
    }
  },
  methods: {
    viewUser(event) {
      console.log(event)
      // const user = this.items.find(item => item.id === id)

      Object.assign(this.user, event)
      this.showModal = true
      this.editingUser = true

    },
    editUser(id) {
      const user = this.items.findIndex(item => item.id === id)

      this.items[user] = this.user
      // for(let item in user) {
      //   this.items[item] = this.user[item]
      // }

      console.log(this.items)
      this.showModal = false
    },
    openModalForDeleteUser() {
      this.showModal = true
      this.editingUser = false
      
    },
    deleteUser(id) {
      const user = this.items.findIndex(item => item.id === id)

      this.items.splice(user,1)
      console.log(this.items)
      this.showModal = false
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
  }

  .tabelaUser {
    width: 90%;
    height: 600px;
    justify-self: center;
  }
  .tabelaUser table {
    width: 100%;
    border: 1px solid;
    border-radius: 10px;
  }
  .tabelaUser td{
    border-bottom: 1px solid #ddd;
  }

  .card {
    padding: 10px;
    display: grid;
    
  }

  .headerCard {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 15px auto;
    width: 95%;
    /* border: 1px solid; */
  }
  .imgListrado {
    max-width: 60px;
  }

  .form{
    width: 95%;
    /* border: 1px solid; */
    margin: 15px auto;
    
  }
  .btn {
    display: flex;
    gap: 10px;
    justify-content: end;
     /* border: 1px solid; */
  }
  .containerInput{
    display: grid;
    height: 50%;
    align-self: center;
  }
  .input {
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0px 15px 0px;
  }
  .input:hover{
    box-shadow: 0px 0px 5px 1px #D9D9D9;
  }
</style>