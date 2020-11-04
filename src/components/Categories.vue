<template>
  <div class="Categories">
    <ui-grid class="ui-ta_center">
      <ui-grid-col size-w="auto">
        <h1>Choose category below:</h1>
      </ui-grid-col>
    </ui-grid>
    <ui-grid>
      <ui-grid-col
        size-w-md="33"
        size-w-sm="50"
        size-w-xs="100"
        v-for="category in products.data"
        :key="category.id"
      >
        <ui-card
          :class="{ selected: category.selected }"
          @click.native="selectCategory(category)"
        >
          {{ category.attributes.name }}
        </ui-card>
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="row justify-center">
      <ui-grid-col size-w="50" class="next_btn">
        <ui-btn @click="toProductList">
          <span>Next</span>
        </ui-btn>
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Categories",
  computed: {
    ...mapState("CommonStore", {
      products: (state) => state.products,
    }),
  },
  methods: {
    ...mapActions("CommonStore", [
      "fetchProducts",
      "setCategory",
      "setFlowEvent",
    ]),
    ...mapMutations("CommonStore", ["SET_FLOW_DATA_TO_STORE"]),
    ...mapMutations("Notifications", ["ADD_ITEM_NOTIFICATION"]),
    selectCategory(category) {
      this.setCategory(category);
    },
    toProductList() {
      let selectedCategory = this.products.data.find((item) => item.selected);
      if (!selectedCategory) {
        this.ADD_ITEM_NOTIFICATION({
          type: "error",
          message: "Please select category! -_-"
        });
        return;
      }
      this.setFlowEvent({
        event: "user-selected-category",
        payload: {
          attributes: {
            category: selectedCategory.attributes.name,
          },
        },
      }).then(() => {
        this.$router.push({ name: "ProductList" });
      });
    },
  },
  mounted() {
    if (!this.products.data.length) {
      this.fetchProducts();
    }
  },
};
</script>

<style lang="scss">
.Categories {
  .ui-card {
    cursor: pointer;
    &.selected {
      box-shadow: 0 0 5px 0 #5977ea;
    }
  }
  .next_btn {
    position: relative;
    & p {
      position: absolute;
      bottom: -25px;
      right: 0;
      left: 0;
    }
  }
}
</style>
