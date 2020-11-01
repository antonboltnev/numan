<template>
  <div class="ui-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiCard"
};
</script>

<style lang="scss">
.ui-card {
  box-shadow: 0 0 5px 0 #cccccc;
  border-radius: 5px;
  padding: $paddingContainer;
}
</style>
