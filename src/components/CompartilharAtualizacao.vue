<template>
  <div>
    <div class="atualizacoes">
      <div class="compartilharAtualizacoes">
        <div class="acoesDeAtualizacao" v-if="status.value !== 'Cancelado'">
          <ul>
            <!-- <li class="publicar">Publicar</li> -->
            <li v-if="isUser" class="encerrarCaso" @click="encerrar">Encerrar</li>
            <li class="cancelarCaso" @click="cancelar">
              Cancelar
            </li>
          </ul>
        </div>
        <div class="descricaoAtualizacao" >
          <v-textarea
            v-if="status.value !== 'Cancelado'"
            v-model="texto"
            class="textArea"
            placeholder="Compartilhar uma atualização"
            variant="outlined"
            hide-details
          ></v-textarea>
          <v-textarea
            v-else
            v-model="texto"
            class="textArea"
            disabled
            placeholder="Compartilhar uma atualização"
            variant="outlined"
            hide-details
          ></v-textarea>
          <!-- {{status}} -->
          <!-- <div class="modificarTexto">
          {{}}
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
            v-if="status.value !== 'Cancelado'"
            title="Compartilhar"
            padding="0px 30px 0px 35px"
            top="8px"
            fontSize="12px"
            @click="enviarAtualizacao"
          />
        </div>
        
      </div>
      <Atualizacoes
        v-for="item in atualizacao"
        :key="item.props.chamadoId"
        :descricao="item.props.descricao"
        :nomeUsuario="author"
      />

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
  },
  props: {
    atualizacao: {
      type: Array
    },
    author: {
      type: String
    },
    status: {
      type: String
    }
  },
  data() {
    return {
      texto: '',
      disabled: false
    }
  },
  computed: {
    isUser() {
      return window.localStorage.getItem('perfil') === 'usuario' ? false : true
    }
  },
  methods: {
    enviarAtualizacao() {
       this.$emit("criarAtualizacao", this.texto)
       this.texto = ""
    },
    encerrar() {
      return this.$emit("showModal", 'encerrar')
    },
    cancelar() {
      return this.$emit("showModal", 'cancelar')
    },
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
    grid-template-columns: repeat(3, 15%);
    height: 50px;
    /* border: 1px solid #dcdcdc; */
    /* border-radius: 10px; */
  }
  .acoesDeAtualizacao ul li {
    display: grid;
    align-items: center;
    width: 100%;
    margin-left: 33px;
    /* height: 100%; */
    align-self: center;
    font-size: 17px;
    cursor: pointer;
    /* border-radius: 0px 0px 10px 0px; */
    text-align: center;
  }

  .acoesDeAtualizacao ul li:hover {
    /* border: 1px solid #dcdcdc; */
    transform: scale(1.10);
    transition: transform 0.1s ease;
  }

  .acoesDeAtualizacao ul li:not(:last-child) {
    border-right: 1px solid #dcdcdc;
  }
  .encerrarCaso {
    color: #429800;
  }
  .cancelarCaso {
    color: #FF0000;
    /* border-bottom: 1px solid; */
    margin-left: 13px;
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