<template>
  <div class="hello">
    <v-img class="buttonEntrar" src="../img/button.png">
      <v-btn 
        class="btnEntrar" 
        @click="click"
        :style="positionStyle"
      >
        {{title}}
      </v-btn>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'theButton',
  props: {
    title: String,
    padding: String,
    top: String,
    left: String,
    right: String,
    fontSize: String
  },
  data() {
    return {
      positionStyle: {
        padding: this.padding,
        top: this.top,
        left: this.left,
        right: this.right,
        fontSize: this.fontSize
      }
    }
  },
  methods: {
    click() {
      return this.$emit('clickEvent')
    }
  }
}
</script>


<style scoped>
  .hello {
    margin-right: 10px;
  }
  .buttonEntrar {
    width: 150px;
    height: 51px;
    justify-self: end;
    position: relative;
  }

  .btnEntrar {
    background: none;
    border: none;
    font-size: 12px;
    box-shadow: none;
    color: #ffffff;
    /* padding: 0px 30px 0px 35px; */
    position: absolute;
    /* top: 8px;
    left: 10px */
  }
</style>
