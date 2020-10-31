<template>
  <div class='ui-grid'>
    <slot />
  </div>
</template>

<script>
  export default {
    name: "UiGrid"
  }
</script>

<style lang="scss">
  /*@import "../../../assets/styles/variables";*/

  .ui-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: $paddingContainer * -1;
    margin-right: $paddingContainer * -1;
  }
</style>
