<template>
  <div class="containerAtualizacao">
    <header class="headerAtualizacao">
      <div class="imgPerfil">
        <span>VS</span>
      </div>
      <p>
        {{nomeUsuario}} <br>
        <!-- <span>Há 1h</span> -->
      </p>
    </header>
    <div class="descricaoContainer">
      <div class="descricao">
        <p>{{descricao}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AtualizacoesChamado",
  props: {
    nomeUsuario: {
      type: String,
      default: "Vinicius Silva Souza"
    },
    descricao: {
      type: String,
      default: "Aqui estará a descrição"
    }
  }
}
</script>

<style scoped>
  .containerAtualizacao{
    display: grid;
    grid-template-rows: 50px 150px;
    width: 94%;
    justify-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 3px #D9D9D9;
    border-radius: 10px;
  }

  .headerAtualizacao {
    display: flex;
    padding: 10px;
    width: 100%;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid;
  }

  .imgPerfil{
    width: 40px;
    height: 40px;
    display: grid;
    align-items: center;
    border: 1px solid;
    border-radius: 50px;
    text-align: center;
    font-size: 18px;
  }

  .descricaoContainer {
    display: grid;
  }
  .descricaoContainer p {
    margin-left: 20px;
    align-items: center;
  }

  .descricao{
    width: 95%;
    height: 80%;
    justify-self: center;
    align-self: center;
    
  }
</style>