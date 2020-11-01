<template>
  <div class="Confirmation">
    <ui-grid>
      <ui-grid-col size-w="auto">
        <h1 class="ui-ta_center">Pls check the info below:</h1>
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="info justify-center">
      <ui-grid-col size-w-md="20" size-w-sm="100" size-w-xs="100">
        <h3 class="ui-ma_0">Product info:</h3>
      </ui-grid-col>
      <ui-grid-col size-w="100">
        <!--        Category-->
        <ui-grid class="justify-center">
          <ui-grid-col
            class="info__item"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span>Category:</span>
          </ui-grid-col>
          <ui-grid-col
            class="info__item ui-ta_right"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span>{{ totalPathData.category.attributes.name }}</span>
          </ui-grid-col>
        </ui-grid>
        <!--        Product-->
        <ui-grid class="justify-center">
          <ui-grid-col
            class="info__item"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span>Product:</span>
          </ui-grid-col>
          <ui-grid-col
            class="info__item ui-ta_right"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span
              >${{ totalPathData.productVariant.data.attributes.price }} -
            </span>
            <span>{{
              totalPathData.selectedProduct.data.attributes.name
            }}</span>
            <span
              >&nbsp;({{
                totalPathData.productVariant.data.attributes.variant
              }})</span
            >
          </ui-grid-col>
        </ui-grid>
        <!--        User data-->
        <ui-grid class="justify-center">
          <ui-grid-col size-w-md="20" size-w-sm="100" size-w-xs="100">
            <h3 class="ui-ma_0">Personal info:</h3>
          </ui-grid-col>
        </ui-grid>
        <ui-grid class="justify-center">
          <ui-grid-col
            class="info__item"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span>Name</span>
          </ui-grid-col>
          <ui-grid-col
            class="info__item ui-ta_right"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span>{{ totalPathData.userData.data.attributes.firstName }}</span>
            <span
              >&nbsp;{{ totalPathData.userData.data.attributes.lastName }}</span
            >
          </ui-grid-col>
        </ui-grid>
        <ui-grid class="justify-center">
          <ui-grid-col
            class="info__item"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span>Phone</span>
          </ui-grid-col>
          <ui-grid-col
            class="info__item ui-ta_right"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span
              >&nbsp;{{ totalPathData.userData.data.attributes.phone }}</span
            >
          </ui-grid-col>
        </ui-grid>
        <ui-grid class="justify-center">
          <ui-grid-col
            class="info__item"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span>Email</span>
          </ui-grid-col>
          <ui-grid-col
            class="info__item ui-ta_right"
            size-w-md="25"
            size-w-sm="50"
            size-w-xs="50"
          >
            <span
              >&nbsp;{{ totalPathData.userData.data.attributes.email }}</span
            >
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
      totalPathData: (state) => state.totalPathData,
    }),
  },
  methods: {
    ...mapActions(["setFlowEvent"]),
    toConfirmationPage() {
      this.setFlowEvent({
        event: "user-submitted-order",
        payload: {
          type: "user-submitted-order",
          data: {
            attributes: this.totalPathData,
          },
        },
      }).then(() => {
        this.$router.push({ name: "ThankYouPage" });
      });
    },
  },
};
</script>

<style lang="scss">
.Confirmation {
  .info {
    &__item {
      border-bottom: solid 1px #e7e7e7;
    }
  }
}
</style>
