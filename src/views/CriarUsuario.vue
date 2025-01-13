<template>
  <div>
    <div class="imgHeader">
      <router-link to="/">
        <v-img class="imgListrado" src="../img/listras-fiat.png" alt="listras" />
      </router-link>
    </div>
    <div class="container">
      <v-img class="imgLogin" src="../img/img-login.png" alt="img-login"/>
      <form class="form" @submit.prevent="submit">
        <v-text-field
          label="Nome Completo"
          v-model="infoUser.name"
          placeholder="..."
          type="text"
          variant="outlined"
          clearable 
        />
        <v-text-field
          label="E-mail"
          v-model="infoUser.email"
          variant="outlined"
          placeholder="johndoe@fiatgima.com.br"
          type="email"
          clearable 
        />
        <v-select
          label="Loja"
          v-model="infoUser.loja"
          :items="lojas"
          variant="outlined"
        />
        <v-text-field
          label="Cargo"
          v-model="infoUser.cargo"
          variant="outlined"
          placeholder="Aux.Adm"
          type="text"
          clearable 
        />
        <v-text-field
          hint="A senha precisa ter no mínimo 6 caracteres."
          label="Senha"
          v-model="infoUser.password"
          variant="outlined"
          type="password"
          clearable 
        />
        <v-text-field
          label="Confirmar Senha"
          v-model="confirmarSenha"
          variant="outlined"
          type="password"
          clearable 
        />

        <Button 
          title="Criar usuário"
          padding="0px 10px 0px 20px"
          top="8px"
          left="5px"
        />
      </form>
    </div>
  </div>
</template>

<script>
// import {defineComponent} from 'vue'
import Button from '@/components/Button.vue'

export default {
  name: "CriarUsuario",
  components: {
    Button
  },
  data() {
    return {
      lojas: ["Gima FL Jaru", "Gima MTZ Ariquemes", "Gima FL Ouro Preto"],
      confirmarSenha: '',
      infoUser: {
        name: '',
        email: '',
        loja: '',
        cargo: '',
        password: ''
      }
    }
  },
  methods: {
    
  }
} 
</script>

<style scoped>

  .imgHeader {
    display: grid;
    
  }
  .imgListrado {
    width: 10%;
    height: 50px;
    justify-self: end;
    
  }

  .container {
   width: 35%;
   height: 800px;
   /* border: 1px solid; */
   border-radius: 10px;
   box-shadow: 0px 0px 5px 0px #D9D9D9;
   display: grid;
   margin: 10px auto;
  }
  .imgLogin {
    width: 25%;
    height: 100px;
    /* border: 1px solid; */
    box-shadow: 0px 0px 1px 0px #D9D9D9;
    justify-self: center;
  }

  .form {
    display: grid;
    width: 90%;
    justify-self: center;
  }

  /* @media (min-height: 1500px) {
    .container {
      height: 800px;
    }
  } */
</style>