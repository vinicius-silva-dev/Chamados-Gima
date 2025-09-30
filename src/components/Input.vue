<template>
  <div class="tituloChamado">
    <label :style="styleLabel">{{label}}</label>
    <input 
      class="input"
      :value="modelValue"
      @input="$emit('update: modelValue', $event.target.value)"
      :type="type"
      :placeholder="placeholder"
      :style="styleInput"
      
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "theInput",
  props: {
    id: {
      type: String
    },
    label: {
      type: String
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: Boolean,
    },
    fontWeight: {
      type: Number
    },
    fontSize: {
      type: Number
    },
    width: {
      type: String
    },
    border: {
      type: String
    }
  },

  data () {
    return {
      styleLabel: {
        fontWeight: this.fontWeight,
      },
      styleInput: {
        fontSize: this.fontSize,
        width: this.width,
        border: this.border
      }
    }
  },
  computed: {
    validateEmptyInput() {
      return this.valueInput.trim() === ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('updateValue', event.target.value)
      // console.log(this.valueInput)
      // this.valueInput = event.target.value
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
    margin: 10px 0px 1px 0px;
  }
  .input:hover{
    box-shadow: 0px 0px 5px 1px #D9D9D9;
  }



  .borderRed {
    border: 1px solid #FF5321;
  }
  .font{
    font-weight: 600;
  }
</style>