<template>
  <div>
    <div 
      class="container"
      :style="success ? {'background': '#228B22', 'color': '#fff'}: {'background': '#FF5321', 'color': '#fff'}"
    >
      <p>{{message}}</p>
      <button
        @click="click"
      >X</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "theAlert",
  props: {
    message: {
      type: String,
      default: ''
    },
    success: {
      type: Boolean
    },
    danger: {
      type: Boolean
    },
  },
  methods: {
    click() {
      return this.$emit('clickEvent')
    }
  }
  // components: {
  //   VFileUpload,
  // }
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: 5px auto;
    width: 20%;
    height: 40px;
    left: 750px;
    z-index: 2;
    border-radius: 4px;
    /* color: #fff;
    background: #228B22; */
  }

  .container p {
    font-weight: 400;
    font-size: 16px;
  }

  .container button {
    position: absolute;
    right: 20px;
  }
</style>