<template>
  <ui-grid
      class='UiTextfield align-center ui-ma_0'
      :class="{ 'UiTextfield__has_error': $props.errors.length > 0 }"
  >
    <ui-grid-col size-w="auto">
      <input
        :value="value"
        :bind="$attrs"
        :placeholder="$props.placeholder"
        @input="$emit('input', $event.target.value)"
      >
    </ui-grid-col>
    <ui-grid-col class="row justify-around" size-w="15" size-w-xs="25">
      <i
        v-if="value"
        class="material-icons"
        @click="$emit('clear')"
      >
        clear
      </i>
    </ui-grid-col>
    <ui-grid-col size-w="100">
      <div
          class="UiTextfield__messages"
          :class="{
        'UiTextfield__messages_error': $props.errors.length > 0
      }"
      >
        <small>
          {{ $props.errors.join(", ") }}
        </small>
      </div>
    </ui-grid-col>
  </ui-grid>
</template>

<script>
  export default {
    name: "UiTextfield",
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: String,
        default: ""
      },
      errors: {
        type: Array,
        default: () => []
      },
    }
  }
</script>

<style lang="scss">
  .UiTextfield {
    border-radius: 10px;
    border: solid 1px #b9b9b9;
    position: relative;
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

    &__messages {
      position: absolute;
      left: 5px;
      color: red;
    }

    &__has_error {
      border-color: red;
    }
  }
</style>
