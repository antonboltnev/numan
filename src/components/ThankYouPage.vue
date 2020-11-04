<template>
  <div class="ThankYouPage">
    <ui-grid>
      <ui-grid-col size-w="100">
        <h1 class="ui-ta_center">Thank you for the order!</h1>
      </ui-grid-col>
      <ui-grid-col size-w="100">
        <router-link :to="{ name: 'Home' }">
          <p class="ui-ta_center">Play again</p>
        </router-link>
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
export default {
  name: "ThankYouPage",
};
</script>

<style lang="scss">
.ThankYouPage {}
</style>
