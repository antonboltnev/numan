<template>
  <div class='Confirmation'>
    Confirmation
    <ui-grid class="row justify-center">
      <ui-grid-col size-w="50">
        <ui-btn @click="toConfirmationPage">
          <span>Next</span>
        </ui-btn>
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Confirmation",
  methods: {
    ...mapActions([
      "setFlowEvent"
    ]),
    toConfirmationPage() {
      this.setFlowEvent( "user-submitted-order")
          .then(() => {
            this.$router.push({ name: 'ThankYouPage' })
          })
    }
  }
}
</script>

<style lang="scss"></style>
