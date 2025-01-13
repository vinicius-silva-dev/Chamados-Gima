<template>
  <div class="container">
    <v-select
      label="Loja"
      :items="['Fiat Gima Jaru', 'Fiat Gima Ariquemes', 'Fiat Gima Ouro Preto']"
      hide-details
      variant="solo-inverted"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "SelectLojas"
}
</script>

<style scoped>
  .container {
    max-width: 15%;
    /* border: 1px solid; */
    margin: 0px 0px 0px 83%;
  }
</style>