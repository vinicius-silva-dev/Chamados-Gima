<template>
  <div>
    <div class="container">
      <router-link to="/">
        <v-img class="imgListrado" src="@/img/listras-fiat.png"></v-img>
      </router-link>
      <main class="main">
        <v-img class="imgLogin" src="@/img/img-login.png"></v-img>
        <p>Defina sua nova senha nos campos abaixo.</p>
        <div class="senhas">
          <v-text-field
            class="input"
            label="Nova senha"
            v-model="password"
            variant="outlined"
            placeholder="..."
            type="email"
            clearable 
          />
          <v-text-field
            class="input"
            label="Confirmar senha"
            v-model="confirmarSenha"
            variant="outlined"
            placeholder="..."
            type="email"
            clearable 
          />
        </div>
        <Button
          title='Alterar Senha'
          padding="0px 30px 0px 35px"
          top="8px"
          fontSize="14px"
        />
      </main>
    <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'NovaSenha',
  components: {
    Button
  },
  data() {
    return {
      password: '',
      confirmarSenha: ''
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-rows: 50px 1fr;
  }
  .imgListrado{
    width: 10%;
    justify-self: end;
  }

  .main{
    width: 30%;
    height: 700px;
    justify-self: center;
    margin-top: 30px;
    display: grid;
    grid-template-rows: 150px 250px 200px;
    box-shadow: 0px 0px 2px 0px #D9D9D9;
  }
  .main p {
    width: 60%;
    justify-self: center;
    align-self: center;
    text-align: center;
    font-weight: 700;
    font-size: 26px;
  }

  .senhas {
    width: 90%;
    display: grid;
    justify-self: center;
    align-items: center;
    height: 150px;
    gap: 10px;
    /* border: 1px solid; */
  }

  .seta {
    height: 50px;
    /* box-shadow: 0px 0px 2px 0px #D9D9D9; */
    /* border-radius: 10px; */
    border: 1px solid #D9D9D9;
  }
  .input {
    width: 80%;
    height: 50px;
    justify-self: center;
  }
</style>
