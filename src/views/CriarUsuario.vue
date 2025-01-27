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
        <Input
          label="Nome Completo"
          placeholder="..."
          type="text"
        />
        <!-- <v-text-field
          label="Nome Completo"
          v-model="infoUser.name"
          placeholder="..."
          type="text"
          variant="outlined"
          clearable 
        /> -->
        <Input
          label="E-mail"
          placeholder="use@fiatgima.com.br"
          type="email"
        />
        <div class="selectLojas">
          <label>Lojas</label>
          <v-select
            v-model="infoUser.loja"
            class="select"
            :items="lojas"
            variant="outlined"
            hide-details
          />
        </div>
        <Input
          label="Cargo"
          placeholder="Aux.adm"
          type="text"
        />
        <Input
          label="Senha"
          placeholder="..."
          type="password"
        />  
        <Input
          label="Confirmar Senha"
          placeholder="..."
          type="password"
        />  

        <Button 
          class="btnSubmit"
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
import Input from '@/components/Input.vue'

export default {
  name: "CriarUsuario",
  components: {
    Button,
    Input
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

  .selectLojas{
    /* display: grid; */
    margin-top: 30px;
    /* border: 1px solid; */
  }

  .select {
     margin-top: 10px;
  }

  .btnSubmit{
    margin-top: 30px;
  }

  /* @media (min-height: 1500px) {
    .container {
      height: 800px;
    }
  } */
</style>