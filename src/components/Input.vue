<template>
  <div class="tituloChamado">
    <label :class="font">{{label}}</label>
    <input 
      class="input"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: "theInput",
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    font: {
      type: String
    }
  }
}
</script>

<style scoped>
  .tituloChamado {
    display: grid;
    height: 50%;
    align-self: center;
    /* border: 1px solid; */

  }

  .input {
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0px 15px 0px;
  }
  .input:hover{
    box-shadow: 0px 0px 5px 1px #D9D9D9;
  }

  .font{
    font-weight: 600;
  }
</style>