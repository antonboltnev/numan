<template>
  <div class='ProductList'>
    <ui-grid>
      <ui-grid-col
          size-w="33"
          v-for="product in localProducts"
          :key="product.id"
      >
        <ui-card>
          <h2>{{product.attributes.name}}</h2>
          <div class="ProductList__item">
            <div class="item__description">
              <p>Description:</p>
              <p>{{product.attributes.description}}</p>
            </div>
            <div class="item__availability" v-if="product.attributes.availability">
              <p>Availability:</p>
              <p>{{product.attributes.availability}}</p>
            </div>
            <div class="item__variants">
              <p>Variants:</p>
            </div>
            <ui-btn
                class="product_variant"
                :class="{default: variant.default}"
                v-for="variant in product.variants"
                :key="variant.id"
                @click="selectVariant(product, variant)"
            >
              <span>{{variant.attributes.variant}}</span>
              <i v-if="variant.default" class="material-icons">check_circle</i>
            </ui-btn>
          </div>
        </ui-card>
      </ui-grid-col>
    </ui-grid>
    <ui-grid class="row justify-center">
      <ui-grid-col size-w="50">
        <ui-btn @click="toContactForm">
          <span>Next</span>
        </ui-btn>
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "ProductList",
  data: () => ({
    localProducts: []
  }),
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  methods: {
    ...mapActions([
        "setFlowEvent"
    ]),
    getProductList() {
      let localProducts = [];
      this.products.data.find(item => {
        if (item.selected) localProducts = item.relationships.products.data;
      })

      localProducts.map(prod => {
        this.products.included.map(item => {
          if (item.type === "product" && item.id === prod.id) {
            this.localProducts.push(item)
            this.getProductVariants(item)
          }
        })
      })
    },
    getProductVariants(product) {
      let exactProduct = this.localProducts[this.localProducts.indexOf(product)]
      this.$set(exactProduct, "variants", []);
        this.products.included.map(item => {
          if (item.type === "product_variant" && item.relationships.product.data.id === product.id) {
            let localItem = {
              default: product.relationships.default_product_variant.data.id === item.id,
              ...item
            }
            exactProduct.variants.push(localItem)
          }
        })
    },
    selectVariant(product, variant) {
      this.localProducts[this.localProducts.indexOf(product)].variants.map(item => {

        item.default = item.id === variant.id;
      })
    },
    toContactForm() {
      this.setFlowEvent( "user-selected-product")
        .then(() => {
          this.$router.push({ name: 'ContactForm' })
        })
    }
  },
  async mounted() {
    await this.getProductList()
  }
}
</script>

<style lang="scss">
.ProductList {
  &__item {
    max-height: 250px;
    overflow-y: auto;
  }
  .item {
    &__description p:first-of-type, &__availability p:first-of-type, &__variants p:first-of-type {
      font-weight: bolder;
    }
  }
  .product_variant {
    &.default {
      background: seagreen;
      position: relative;
    }
    .material-icons {
      position: absolute;
      top: 13px;
      right: 10px;
    }
  }
}
</style>
