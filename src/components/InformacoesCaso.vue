<template>
  <div>
    <div class="informacoesCaso">
      <div class="detalhe">
        <h2>Detalhes</h2>
        <div class="titleCaso">
          <div class="subtitle">
            <v-img class="seta" src='../img/seta-black.png'></v-img>
            <h2>Descrição do caso</h2>
          </div>
          <h3>Assunto</h3>
          <p>Descrição do caso</p>
        </div>
        <div class="descricao">
          <h3>Descrição</h3>
          <p>
            Aqui vai toda a descrição do chamado
          </p>
        </div>
      </div>
      <div class="informacoes">
        <h2>Informações</h2>
        <div class="infoUsuario">
          <div class="nomeContato">
            <h4>Nome do contato</h4>
            <p>Vinicius Silva</p>
          </div>
          <div class="telefone">
            <h4>Nome do contato</h4>
            <p>Vinicius Silva</p>
          </div>
          <div class="email">
            <h4>Nome do contato</h4>
            <p>Vinicius Silva</p>
          </div>
          <div class="loja">
            <h4>Nome do contato</h4>
            <p>Vinicius Silva</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformacoesCaso"
}
</script>

<style scoped>
  .informacoesCaso{
    display: grid;
    /* height: 700px; */
    
    
  }

  .detalhe {
    display: grid;
    grid-template-rows: 15% 35% 35% 15%;
    width: 100%;
    height: 500px;
    box-shadow: 0px 0px 5px 3px #D9D9D9;
    margin-bottom: 10px;
    border-radius: 10px;
    /* border: 1px solid; */
  }

  .titleCaso{
    display: grid;
    grid-template-rows: 40% 30% 30%;
    border: 1px solid #dcdcdc;
    padding: 10px;
  }

  .detalhe > h2 {
    text-decoration: underline ;
    padding: 10px;
  }

  .subtitle{
    display: flex;
    gap: 15px;
  }
  .seta {
    max-width: 25px;
    height: 40px;
    /* border: 1px solid; */
  }
  
  .descricao {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 10px;
  }
  
</style>