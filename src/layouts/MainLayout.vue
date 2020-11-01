<template>
  <div class='MainLayout'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style lang="scss">
.MainLayout {
  max-width: 900px;
  margin: 100px auto 0;
  padding: $paddingContainer;
  background: #f9f9f9;
  box-shadow: 0 0 11px 1px #d6d6d6;
  border-radius: 5px;
}
</style>
