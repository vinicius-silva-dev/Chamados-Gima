<template>
  <div>
    <div class="container">
      <router-link to="/">
        <v-img class="imgListrado" src="@/img/listras-fiat.png"></v-img>
      </router-link>
      <main class="main">
        <v-img class="imgLogin" src="@/img/img-login.png"></v-img>
        <p>Para redefinir sua senha, digite seu e-mail .</p>
        <div class="form">
          <v-text-field
            class="input"
            label="E-mail"
            v-model="email"
            variant="outlined"
            placeholder="johndoe@fiatgima.com.br"
            type="email"
            clearable 
          />
          <v-img class="seta" src="@/img/seta.svg"></v-img>
        </div>
      </main>
    <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecuperarSenha',
  data() {
    return {
      email: ''
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

  .form {
    width: 90%;
    justify-self: center;
    display: flex;
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
  }
</style>
