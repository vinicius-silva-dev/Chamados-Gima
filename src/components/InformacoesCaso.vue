<template>
  <div>
    <div class="informacoesCaso">
      <div class="detalhe">
        <h2>Detalhes</h2>
        <div class="titleCaso">
          <div class="subtitle">
            <!-- <v-img class="seta" src='../img/seta-black.png'></v-img> -->
            <h2>Descrição do caso</h2>
          </div>
          <div class="assunto">
            <h3>Assunto</h3>
            <p>{{title}}</p>
          </div>
        </div>
        <div class="descricao">
          <h3>Descrição</h3>
          <p>
            {{descricao}}
          </p>
        </div>
      </div>
      <div class="informacoes">
        <h2>Informações</h2>
        <ul class="infoUsuario">
          <li class="nomeContato">
            <h4>Nome do contato</h4>
            <p>{{author}}</p>
          </li>
          <li class="telefone">
            <h4>Telefone</h4>
            <p>{{telefone}}</p>
          </li>
          <li class="email">
            <h4>E-mail</h4>
            <p>{{email}}</p>
          </li>
          <li class="loja">
            <h4>Loja</h4>
            <p>{{loja}}</p>
          </li>
        </ul>
        <!-- <div class="infoAdicionais">

        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformacoesCaso",
  props: {
    title: {
      type: String
    },
    descricao: {
      type: String
    },
    author: {
      type: String
    },
    email: {
      type: String
    },
    telefone: {
      type: String
    },
    loja: {
      type: String
    },
  }
}
</script>

<style scoped>
  .informacoesCaso{
    display: grid;
    margin-top: 10px;
    margin-right: 20px;
    font-family: 'Roboto', sans-serif;
    height: 10%;
    
    
  }

  .detalhe {
    display: grid;
    grid-template-rows: 15% 40% 45%;
    /* align-items: center; */
    width: 100%;
    height: 400px;
    box-shadow: 0px 0px 5px 3px #D9D9D9;
    margin-bottom: 10px;
    border-radius: 10px;
    /* border: 1px solid ; */
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
  
  .titleCaso{
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    align-items: center;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    padding: 10px;
  }

  .detalhe > h2 {
    /* text-decoration: underline ; */
    font-weight: 500;
    padding: 10px;
  }

  .descricao {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 10px;
  }
  

  .informacoes {
    display: grid;
    /* grid-template-rows: 20% 40% 40%; */
    width: 100%;
    max-height: 400px;
    box-shadow: 0px 0px 5px 3px #D9D9D9;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .informacoes > h2 {
    font-weight: 500;
    padding: 10px;
  }

  .infoUsuario {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
  }
  .infoUsuario li {
    border-bottom: 1px solid #D9D9D9;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }

  .infoUsuario li h4 {
    text-align: center;
    font-size: 18px;
  }
  
  
  .infoUsuario li p {
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
  }
  
</style>