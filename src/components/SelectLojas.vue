<template>
  <div class="containerSelect">
    <v-select
      label="Loja"
      :items="['Fiat Gima Jaru', 'Fiat Gima Ariquemes', 'Fiat Gima Ouro Preto']"
      hide-details
      variant="solo-inverted"
      bg-color="#3C3E42"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "SelectLojas"
}
</script>

<style scoped>
  .containerSelect {
    max-width: 15%;
    /* border: 1px solid; */
    margin: 0px 0px 0px 83%;
  }
</style>