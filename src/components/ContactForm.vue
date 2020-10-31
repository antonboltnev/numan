<template>
  <div class='ContactForm'>
    ContactForm
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
import { mapActions } from "vuex"

export default {
  name: "ContactForm",
  methods: {
    ...mapActions([
      "setFlowEvent"
    ]),
    toConfirmationPage() {
      this.setFlowEvent( "user-entered-contact-data")
          .then(() => {
            this.$router.push({ name: 'Confirmation' })
          })
    }
  }
}
</script>

<style lang="scss"></style>
