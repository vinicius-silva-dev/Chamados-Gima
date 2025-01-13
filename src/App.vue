<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
 body {
  height: 100vh;
  font-family: 'Roboto', sans-serif sans-serif;
 }

 ul li {
  list-style: none;
 }
</style>
