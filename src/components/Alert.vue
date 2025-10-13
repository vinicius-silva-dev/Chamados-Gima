<template>
  <div>
    <v-alert
      v-if="alert"
      v-model="showMsg"
      dismissible
      elevation="2"
      :type="type"
      max-width="25%"
    >
      {{message}}
    </v-alert>
  </div>
</template>

<script>

export default {
  name: "theAlert",
  props: {
    alert: {
      type: Boolean
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String
    },
  },
  data() {
    return {
      showMsg: this.alert
    }
  },
  methods: {
    click() {
      return this.$emit('clickEvent')
    }
  },
  watch: {
    alert(val) {
      this.showMsg = val
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