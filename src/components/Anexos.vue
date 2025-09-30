<template>
  <v-file-input
    multiple
    dense
    outlined
    hide-details
    
    label="Anexos"
    class="anexos"
  ></v-file-input>
  <!-- <v-file-upload
    browse-text="Buscar neste computador"
    divider-text="ou"
    icon="mdi-upload"
    title="Arraste a imagem"
    class="anexos"
  ></v-file-upload> -->
</template>

<script>
// import { VFileUpload } from 'vuetify/labs/VFileUpload'
export default {
  name: "theAnexos",
    components: {
  },
  props: {
    file: {
      type: Array[String]
    }
  }
}
</script>

<style scoped>
  ::v-deep(.v-file-input) {
    margin: 0;
    padding: 0;
    min-height: 20px !important; /* força a altura */
    height: 20px !important;
  }

  ::v-deep(.v-input__control) {
    min-height: 20px !important;
  }
  .anexos {
    margin: 10px 0;
  }
</style>