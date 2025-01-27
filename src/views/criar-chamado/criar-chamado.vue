<template>
  <div class="novoCasoContainer">
    <main class="formCreateCase">
      <v-select
        label="Qual loja você é ?"
        :items="['Fiat Gima Jaru', 'Fiat Gima Ariquemes', 'Fiat Gima Ouro Preto']"
        class="loja"
        type="text"
        variant="outlined"
        hide-details
      />

      <div class="nivelPrioridade">
        <p>Qual o nível de prioridade ?</p>
        <v-checkbox label="Baixo" value="baixo" hide-details></v-checkbox>
        <v-checkbox label="Médio" value="medio" hide-details></v-checkbox>
        <v-checkbox label="Alto"  value="alto" hide-details></v-checkbox>
      </div>
      <div class="tipoChamado">
        <p>Qual é o tipo do chamado ?</p>
        <v-radio-group inline>
          <v-radio label="Dúvida" value="duvida" ></v-radio>
          <v-radio label="Incidente" value="incidente"></v-radio>
          <v-radio label="Melhoria" value="melhoria"></v-radio>
        </v-radio-group>
      </div>
      <div class="titulo-descricao">
        <Input
          label="Título do chamado"
          placeholder="Escreva o título do chamado"
        />
        <!-- <div class="tituloChamado">
          <label>Título do chamado</label>
          <input 
            type="text"
            class="input"
            placeholder="Escreva o título do chamado"
          >
        </div> -->
        <!-- <v-text-field 
          class="tituloChamado"
          label="Título do chamado"
          type="text"
          hide-details
          variant="outlined"
        /> -->
        <v-textarea 
          label="Descrição do chamado"
          type="text"
          hide-details
          variant="outlined"
        />
      </div>
      <Button 
        title="Proximo"   
        padding="0px 30px 0px 35px"
        top="8px"
        left="5px"   
        fontSize="14px"
      />
    </main>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

export default {
  name:  "CreateCase",
  components: {
    Button,
    Input
  }
}
</script>

<style scoped>
  .novoCasoContainer{
    display: grid;
    width: 95%;
    height: 800px;
    /* max-height: 800px; */
    margin: 0px auto;
    border: 1px solid #D9D9D9;
  }

  .formCreateCase {
    display: grid;
    padding: 10px;
    width: 80%;
    height: 95%;
    margin: 10px auto;
    /* border: 1px solid; */
  }

  .loja{
    width: 40%;
    margin-bottom: 20px;
  }

  .titulo-descricao{
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 80%;
    margin-bottom: 20px;
  }
  /* .font{
    font-weight: 600;
  } */
</style>