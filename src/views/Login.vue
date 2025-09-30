<template>
  <div class="container">
    <div class="img">
      <v-img class="imgGima" src="../img/logio-gima.png"></v-img>
    </div>
    <div class="login">
      <v-img class="imgListrado" src="../img/listras-fiat.png" alt="listras" />
      <div class="mainLogin">
        <div>
          <v-img class="imgLogin" src="../img/img-login.png" alt="img-login" />
          <v-radio-group 
            v-model="user" 
            inline
            hide-details
          >
            <v-radio label="Analista" value="analista" />
            <v-radio label="Usuário" value="usuario" />
          </v-radio-group>
        </div>
        <form class="form" @submit.prevent="submit">
          <div class="form-login">
            <label>Email</label>
            <input
              label="E-mail"
              v-model="email"
              class="input"
              placeholder="johndoe@fiatgima.com.br"
            />
          </div>
          
          <div class="form-login">
            <label>Senha</label>
            <input
              label="Senha"
              v-model="password"
              class="input"
              type="password"
              placeholder="johndoe@fiatgima.com.br"
            />
          </div>
          <span class="resetSenha">Esqueceu a senha? <router-link to="/recuperarsenha">Redefinir senha</router-link></span>
          <Button 
            @clickEvent="login"
            title="Entrar"
            padding="0px 30px 0px 35px"
            top="8px"
            left="10px"
          />
     
        </form>
        <div class="separador">
          <div class="linha"></div>
          <v-img class="imgSeparador" src="../img/image 6.svg" ></v-img>
          <div class="linha"></div>
        </div>
        <router-link class="criarConta" to="/criarusuario">Criar nova conta</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

import Button from '@/components/Button.vue'
// import Input from '@/components/Input.vue'
import { mapActions } from 'vuex'

export default {
  name: 'theLogin',
  components: {
    Button
  },
  data() {
    return {
      email: '',
      password: '',
      user: '',
    }
  },
  created(){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('perfil')
  },
  methods: {
    ...mapActions('users' ,['login']),

    async login() {
      const data = {
        email: this.email,
        password: this.password,
        isUser: this.user
      }


      const result = await this.$store.dispatch('users/login', data)

      window.localStorage.setItem('token', result.token)
      window.localStorage.setItem('perfil', this.user)

      if(result) {
        this.$router.push("/home")
      }
    }
  }
}
</script>

<style scoped>

  a {
    text-decoration: none;

  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    /* border: 1px solid; */
  }

  .img {
    width: 100%;
    height: 100%;
    /* border: 1px solid #ff0000; */
    display: grid;
    align-items: center;
    background: #3C3E42;
  }
  .imgGima {
    /* border: 1px solid; */
    height: 70%;
    width: 80%;
    justify-self: center;

  }

  .login {
    width: 100%;
    height: 90%;
    padding: 0px;
    /* border: 1px solid; */
    margin: 0px auto;
    display: grid;
    /* grid-template-columns: 1fr; */
    grid-template-rows: 150px 1fr;
  }

  .imgListrado{
    width: 10%;
    height: 50px;
    justify-self: end;
    /* border: 1px solid; */
  }
  .mainLogin {
    width: 70%;
    height: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-rows: 25% 50% 10%;
    box-shadow: 0px 0px 5px 3px #D9D9D9;
    border-radius: 10px;
    /* border: 1px solid; */
  }

  .criarConta{
    justify-self: center;
  }

  .imgLogin{ 
    width: 20%;
    height: 80px;
    /* border: 1px solid; */
    box-shadow: 0px 0px 1px 0px #D9D9D9;
    justify-self: center;
  }

  .form {
    display: grid;
    /* border: 1px solid; */
    width: 90%;
    justify-self: center;
  }
  .form-login {
    display: grid;
  }
  .form-login label {
    font-weight: bold;
  }
  .input {
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding: 10px;
    margin: 0px 0px 15px 0px;
  }
  .input:hover{
    box-shadow: 0px 0px 5px 1px #D9D9D9;
  }
  .font{
    font-weight: 600;
  }
  .resetSenha{
    margin-top: 20px;
  }

  .separador {
    display: flex;
    width: 90%;
    /* border: 1px solid; */
    justify-self: center;
    align-items: center;
  }

  .linha {
    width: 50%;
    border: 1px solid #3C3E42;
  }

  .imgSeparador {
    /* border: 1px solid; */
    width: 42px !important;
  }

  .buttonEntrar {
    width: 150px;
    height: 51px;
    justify-self: end;
    position: relative;
  }

  .btnEntrar {
    background: none;
    border: none;
    box-shadow: none;
    color: #ffffff;
    padding: 0px 30px 0px 35px;
    position: absolute;
    top: 8px;
    left: 10px
  }

  @media only screen and (min-height: 1537px) {
    .mainLogin {
      align-content: center;
      grid-template-rows: 200px 400px 50px;
    }
  }

</style>
