<template>
  <ui-grid class='UiTextfield align-center'>
    <ui-grid-col size-w="auto">
      <input
        :value="modelValue"
        :bind="$attrs"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </ui-grid-col>
    <ui-grid-col class="row justify-around" size-w="15" size-w-xs="25">
      <i
        class="material-icons"
        v-if="modelValue"
        @click="$emit('search')"
      >
        search
      </i>
      <i
        v-if="modelValue"
        class="material-icons"
        @click="$emit('clear')"
      >
        clear
      </i>
    </ui-grid-col>
  </ui-grid>
</template>

<script>
  export default {
    name: "UiTextfield",
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style lang="scss">
  .UiTextfield {
    border-radius: 10px;
    border: solid 1px #b9b9b9;
    & > .ui-grid__col {
      padding: 0 !important;
    }
    & input {
      padding: 15px;
      color: #2D2D2D;
      font-size: 16px;
      appearance: none;
      background: transparent;
      border: none;
      width: 100%;
      -webkit-tap-highlight-color: transparent;
      outline: none;
    }
    & .material-icons {
      cursor: pointer;
      color: #b3b3b3;
      position: relative;
      top: 3px;
    }
  }
</style>
