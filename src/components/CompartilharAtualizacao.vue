<template>
  <div>
    <div class="atualizacoes">
      <div class="compartilharAtualizacoes">
        <div class="acoesDeAtualizacao">
          <ul>
            <li class="publicar">Publicar</li>
            <li class="encerrarCaso">Encerrar Caso</li>
            <li class="cancelarCaso">Cancelar Caso</li>
          </ul>
        </div>
        <div class="descricaoAtualizacao">
          <v-textarea
            class="textArea"
            placeholder="Compartilhar uma atualização"
            variant="outlined"
            hide-details
          ></v-textarea>
          <!-- <div class="modificarTexto">
            <v-btn-toggle
              v-model="formatting"
              variant="outlined"
              divided
              multiple
            >
              <v-btn>
                <v-icon icon="mdi-format-italic"></v-icon>
              </v-btn>
              <v-btn>
                <v-icon icon="mdi-format-bold"></v-icon>
              </v-btn>
              <v-btn>
                <v-icon icon="mdi-format-underline"></v-icon>
              </v-btn>
            </v-btn-toggle>
          </div> -->
          <Button
            title="Compartilhar"
            padding="0px 30px 0px 35px"
            top="8px"
            fontSize="12px"
          />
        </div>
        
      </div>
      <Atualizacoes/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Atualizacoes from './Atualizacoes.vue'

export default {
  name: "CompartilharAtualizacao",
  components: {
    Button,
    Atualizacoes
  }
}
</script>

<style scoped>
  .atualizacoes {
    display: grid;
  }
  .compartilharAtualizacoes {
    box-shadow: 0px 0px 5px 3px #D9D9D9;
    width: 94%;
    justify-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .acoesDeAtualizacao {
    width: 100%;
    justify-self: center;
    /* border: 1px solid; */
  }

  .acoesDeAtualizacao ul {
    display: grid;
    grid-template-columns: 30% 30% 40%;
    height: 70px;
    /* border: 1px solid #dcdcdc; */
    border-radius: 10px;
  }
  .acoesDeAtualizacao ul li {
    display: grid;
    align-items: center;
    width: 100%;
    height: 100%;
    align-self: center;
    font-size: 18px;
    border: 1px solid #dcdcdc;
    /* border-radius: 0px 0px 10px 0px; */
    text-align: center;
  }
  .encerrarCaso {
    color: #429800;
  }
  .cancelarCaso {
    color: #FF0000;
  }

  .textArea{
    width: 95%;
    justify-self: center;
    margin-top: 10px;
  }
  .modificarTexto {
    margin-left: 20px;
  }
</style>