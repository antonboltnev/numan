<template>
  <div class='Confirmation'>
    <ui-grid>
      <ui-grid-col size-w="auto">
        <h1 class="ui-ta_center">Pls check the info below:</h1>
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="justify-center">
      <ui-grid-col size-w="50">
        <h3 class="ui-ma_0">Product info:</h3>
      </ui-grid-col>
      <ui-grid-col size-w="100">
<!--        Category-->
        <ui-grid class="justify-center">
          <ui-grid-col size-w="20">
            <span>Category:</span>
          </ui-grid-col>
          <ui-grid-col size-w="20" class="ui-ta_right">
            <span>{{ totalPathData.category.attributes.name }}</span>
          </ui-grid-col>
        </ui-grid>
<!--        Product-->
        <ui-grid class="justify-center">
          <ui-grid-col size-w="20">
            <span>Product:</span>
          </ui-grid-col>
          <ui-grid-col size-w="20" class="ui-ta_right">
            <span>${{totalPathData.productVariant.data.attributes.price}} - </span>
            <span>{{ totalPathData.selectedProduct.data.attributes.name }}</span>
            <span>&nbsp;({{totalPathData.productVariant.data.attributes.variant}})</span>
          </ui-grid-col>
        </ui-grid>
<!--        User data-->
        <ui-grid class="justify-center">
          <ui-grid-col size-w="50">
            <h3 class="ui-ma_0">Personal info:</h3>
          </ui-grid-col>
        </ui-grid>
        <ui-grid class="justify-center">
          <ui-grid-col size-w="20">
            <span>Name</span>
          </ui-grid-col>
          <ui-grid-col size-w="20" class="ui-ta_right">
            <span>{{totalPathData.userData.data.attributes.firstName}}</span>
            <span>&nbsp;{{totalPathData.userData.data.attributes.lastName}}</span>
          </ui-grid-col>
        </ui-grid>
        <ui-grid class="justify-center">
          <ui-grid-col size-w="20">
            <span>Phone</span>
          </ui-grid-col>
          <ui-grid-col size-w="20" class="ui-ta_right">
            <span>&nbsp;{{totalPathData.userData.data.attributes.phone}}</span>
          </ui-grid-col>
        </ui-grid>
        <ui-grid class="justify-center">
          <ui-grid-col size-w="20">
            <span>Email</span>
          </ui-grid-col>
          <ui-grid-col size-w="20" class="ui-ta_right">
            <span>&nbsp;{{totalPathData.userData.data.attributes.email}}</span>
          </ui-grid-col>
        </ui-grid>
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="row justify-center">
      <ui-grid-col size-w="50">
        <ui-btn @click="toConfirmationPage">
          <span>Pay now</span>
        </ui-btn>
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Confirmation",
  computed: {
    ...mapState({
      totalPathData: state => state.totalPathData
    })
  },
  methods: {
    ...mapActions([
      "setFlowEvent"
    ]),
    toConfirmationPage() {
      this.setFlowEvent( { event: "user-submitted-order", payload: {
          type: "user-submitted-order",
          data: {
            attributes: this.totalPathData
          }
        }
      })
        .then(() => {
          this.$router.push({ name: 'ThankYouPage' })
        })
    }
  }
}
</script>

<style lang="scss"></style>
