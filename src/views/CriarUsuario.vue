<template>
  <div class="containerCreateUser">
    <Alert
      v-if="alert"
      :message="alertMessage"
      :success="alertSuccess"
      :danger="alertDanger"
      @click="() => alert = false"
    />
    <div class="imgHeader">
      <router-link to="/">
        <v-img class="imgListrado" src="../img/listras-fiat.png" alt="listras" />
      </router-link>
    </div>
    <div class="container">
      <v-img class="imgLogin" src="../img/img-login.png" alt="img-login"/>
      <form class="form" @submit.prevent="submit">
        <div class="tituloChamado">
          <label>Nome Completo</label>
          <input 
            id="name"
            class="input"
            @input="updateValue"
            v-model="infoUser.name"
            type="trxt"
            placeholder="ex: Jhon Duon"
            :style="isErrors.isErrorInputName === true ? {'border':'1px solid #FF5321'} : {}"
          >
          <span class="errorMessage" v-if="isErrors.isErrorInputName">Campo obrigatório</span>
        </div>

        <div class="tituloChamado" :style="{'marginTop': '15px'}">
          <label>E-mail</label>
          <input 
            id="email"
            class="input"
            @input="updateValue"
            v-model="infoUser.email"
            label="E-mail"
            placeholder="use@fiatgima.com.br"
            type="email"
            :style="isErrors.isErrorInputEmail === true ? {'border':'1px solid #FF5321'} : {}"
          >
          <span class="errorMessage" v-if="isErrors.isErrorInputEmail">Campo obrigatório</span>
        </div>
        <!-- <Input
          id="name"
          v-model="infoUser.name"
          label="Nome Completo"
          placeholder="..."
          type="text"
          :border=" isErrorInputName !== false ? '1px solid #FF5321' : ''"
        >
          <span class="errorMessage" v-if="isErrorInputName">Campo obrigatório</span>
        </Input> -->
        
        <!-- <v-text-field
          label="Nome Completo"
          v-model="infoUser.name"
          placeholder="..."
          type="text"
          variant="outlined"
          clearable 
        /> -->
        <!-- <Input
          id="email"
          v-model="infoUser.email"
          label="E-mail"
          placeholder="use@fiatgima.com.br"
          type="email"
        >
          <span class="errorMessage" v-if="isErrorInputEmail">Campo obrigatório</span>
        </Input> -->
        <div class="selectLojas">
          <label>Lojas</label>
          <v-select
            id="lojas"
            v-model="infoUser.loja"
            class="select"
            :items="lojas"
            variant="outlined"
            hide-details  
          />
        </div>
        <div class="tituloChamado" :style="{'marginTop': '15px'}">
          <label>Cargo</label>
          <input 
            id="cargo"
            class="input"
            @input="updateValue"
            v-model="infoUser.cargo"
            type="text"
            placeholder="Aux.adm"
            :style="isErrors.isErrorInputCargo === true ? {'border':'1px solid #FF5321'} : {}"
          >
          <span class="errorMessage" v-if="isErrors.isErrorInputCargo">Campo obrigatório</span>
        </div>
        <div class="tituloChamado" :style="{'marginTop': '15px'}">
          <label>Senha</label>
          <input 
            id="password"
            class="input"
            v-model="infoUser.password"
            type="password"
            placeholder="..."
          
          >
          <!-- <span class="errorMessage" v-if="isErrors.isErrorInputSenha">Campo obrigatório</span> -->
        </div>  
         <!-- <div class="tituloChamado" :style="{'marginTop': '15px'}">
          <label>Confirmar Senha</label>
          <input 
            class="input"
            v-model="confirmarSenha"
            type="password"
            placeholder="..."
          >
          <span class="errorMessage" v-if="isErrors.isErrorInputConfirmarSenha">As senhas precisam ser iguais.</span>
        </div>     -->

        <Button 
          class="btnSubmit"
          title="Criar usuário"
          padding="0px 10px 0px 20px"
          top="8px"
          left="5px"
          @click="submmitForm"
        />
      </form>
    </div>
  </div>
</template>

<script>
// import {defineComponent} from 'vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'
import Alert from '@/components/Alert.vue'

export default {
  name: "CriarUsuario",
  components: {
    Button,
    Alert
  },
  data() {
    return {
      lojas: ["Gima MTZ Ariquemes", "Gima FL Jaru", "Gima FL Ouro Preto"],
      confirmarSenha: '',
      infoUser: {
        name: '',
        email: '',
        loja: '',
        cargo: '',
        password: ''
      },
      alert: false,
      alertSuccess: false,
      alertDanger: false,
      alertMessage: '',
      isErrors: {
        isErrorInputName: false,
        isErrorInputEmail: false,
        isErrorInputLoja: false,
        isErrorInputCargo: false,
        // isErrorInputSenha: false,
        // isErrorInputConfirmarSenha: false
      }
      
    }
  },
  //  computed: {
  //   validateEmptyInput() {
  //     return this.infoUser.name === '' 
  //   }
  // },
  methods: {
     ...mapActions('users' ,['createUser']),
    async submmitForm() {
      if(this.infoUser.name === '' ) this.isErrors.isErrorInputName = true
      if(this.infoUser.email === '') this.isErrors.isErrorInputEmail = true
      if(this.infoUser.loja === '') this.isErrors.isErrorInputLoja= true
      if(this.infoUser.cargo === '') this.isErrors.isErrorInputCargo = true
      // if(this.infoUser.password === '') this.isErrors.isErrorInputSenha = true
      // if(this.infoUser.password !== this.confirmarSenha) this.isErrors.isErrorInputConfirmarSenha = true


      try {
        console.log(
          this.infoUser.name ,
          this.infoUser.email,
          this.infoUser.loja ,
          this.infoUser.cargo,
        )
        for(let err in this.isErrors) {
          if(this.isErrors[err] === true) {
            console.log('err', this.isErrors[err])
            this.alert = true
            this.alertDanger = true
            this.alertMessage = 'Os campos obrigatórios precisam ser preenchidos!'
            setTimeout(() => {
              this.alert = false
              this.alertDanger = false
            }, 5000)
          }
        }
        
        const data = {
          name: this.infoUser.name,
          email: this.infoUser.email,
          loja: this.infoUser.loja,
          cargo: this.infoUser.cargo,
          password: this.infoUser.password,
        }
        
        if(!this.alertDanger) {
          // console.log('Ocorreu', data)
          const result = await this.$store.dispatch('users/createUser', data)
          this.alert = true
          this.alertSuccess = true
          this.alertMessage = result.mensage

          setTimeout(() => {
            this.$router.push("/login")
          }, 2000)
          // console.log('data: ',result)

          if(!result) {
            this.alert = true
            this.alertDanger = true
            this.alertMessage = result
          }
        }
        } catch (error) {
          console.log('err: ',error.message)
          this.alert = true
          this.alertDanger = true
          this.alertMessage = error.message
        }
    },

    updateValue() {
      if(this.infoUser.name !== '' ) this.isErrors.isErrorInputName = false
      if(this.infoUser.email !== '') this.isErrors.isErrorInputEmail = false
      if(this.infoUser.loja !== '') this.isErrors.isErrorInputLoja= false
      if(this.infoUser.cargo !== '') this.isErrors.isErrorInputCargo = false
     
    }
  }
} 
</script>

<style scoped>
  .containerCreateUser{
    position: relative;
  }

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
   height: auto;
   /* border: 1px solid; */
   border-radius: 10px;
   box-shadow: 0px 0px 5px 0px #D9D9D9;
   display: grid;
   margin: 20px auto;
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

  .tituloChamado {
    display: grid;
    height: 50%;
    align-self: center;
    /* border: 1px solid; */

  }

  .input {
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0px 1px 0px;
  }
  .input:hover{
    box-shadow: 0px 0px 5px 1px #D9D9D9;
  }



  .borderRed {
    border: 1px solid #FF5321;
  }
  .font{
    font-weight: 600;
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

  .errorMessage{
    margin-bottom: 15px;
    font-size: 12px;
    color: #FF5321;
  } 
 

  /* @media (min-height: 1500px) {
    .container {
      height: 800px;
    }
  } */
</style>