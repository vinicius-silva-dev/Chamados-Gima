<template>
  <div class="container">
    <header class="header">
      <div class="status">
        <div class="caso">
          <V-img src="../../img/codigo.png"/>
          <p>
            Caso <br>
            N° 03254
          </p>
        </div>
        <div class="statusCaso"></div>
      </div>
      <div class="headerInfo"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "DetalheChamado"
}
</script>

<style scoped>
  .container {
    width: 80%;
    margin: 0 auto;
    border: 1px solid;
  }
</style>