<template>
  <div>
    <v-dialog
      v-if="showModal"
      v-model="dialog"
      @click:outside="handleOutsideClick"
      max-width="700"
      max-height="800"
    >
      <v-card class="card">
        <h3>{{tipoOperacao}}</h3>

        <v-textarea
        v-if="tipoOperacao === 'encerrar'"
        v-model="descricaoEncerramento"
        label="Descrição de encerramento"
      ></v-textarea>
        <v-textarea
        v-else
        v-model="descricao"
        label="Descrição de cancelamento"
      ></v-textarea>
        <div class="btn">
          <v-btn color="red" @click="cancelar">Cancelar</v-btn>
          <v-btn v-if="tipoOperacao === 'encerrar'" color="success" @click="publicar">Encerrar</v-btn>
          <v-btn color="success" @click="cancelarChamado" v-else>Ok</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  name: 'ModalDialog',
  props: {
    showModal: {
      type: Boolean
    },
    tipoOperacao: {
      type: String
    }
  },
  data() {
    return {
      dialog: this.showModal,
      descricaoEncerramento: '',
      descricao: ''
    }
  },

  methods: {
    publicar() {
      this.$emit('compartilhar', this.descricaoEncerramento)
      this.descricaoEncerramento = ""
      this.dialog = false
    },
    cancelarChamado() {
      this.$emit('cancelarChamado', this.descricao)
      this.descricao = ""
      this.dialog = false
    },
    cancelar() {
      this.dialog = !this.dialog
    },
    handleOutsideClick() {
      console.log("Clicou fora do dialog!");
      this.$emit('update:showModal', false)
    },
  },
  watch: {
    showModal(val) {
      this.dialog = val
    }
  }
}
</script>

<style scoped>
  .card {

  }
</style>

