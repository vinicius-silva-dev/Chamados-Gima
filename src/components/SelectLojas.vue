<template>
  <div class="containerSelect">
    <v-select
      :items="['Fiat Gima Jaru', 'Fiat Gima Ariquemes', 'Fiat Gima Ouro Preto']"
      value="Fiat Gima Jaru"
      hide-details
      variant="underlined"
      
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
    margin-left: 83%;
  }
</style>