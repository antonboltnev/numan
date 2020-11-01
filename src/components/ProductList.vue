<template>
  <div class='ProductList'>
    <ui-grid class="ui-ta_center">
      <ui-grid-col size-w="auto">
        <h1>Choose product below:</h1>
      </ui-grid-col>
    </ui-grid>
    <ui-grid>
      <ui-grid-col
          size-w="33"
          v-for="product in localProducts"
          :key="product.id"
      >
        <ui-card
            :class="{default: product.default}"
            @click.native="selectProduct(product)"
        >
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
              <span>{{variant.attributes.variant}}&nbsp;-&nbsp;${{variant.attributes.price}}</span>
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
import {mapActions, mapMutations, mapState} from "vuex"

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
    ...mapMutations([
      "SET_FLOW_DATA_TO_STORE"
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
            this.localProducts.sort((a,b) => {
              if(a.attributes.name < b.attributes.name) { return -1; }
              if(a.attributes.name > b.attributes.name) { return 1; }
              return 0;
            })
            this.getProductVariants(item)
          }
        })

        this.localProducts.map(product => {
          this.$set(product, "default", false);
          this.products.data.map(item => {
            if (item.relationships.default_product.data.id === product.id) product.default = true;
          })
        })
      })
    },
    getProductVariants(product) {
      let exactProduct = this.localProducts[this.localProducts.indexOf(product)];
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
      //sorting product variants by price (descending)
      exactProduct.variants.sort((a, b) => {
        if(a.attributes.price < b.attributes.price) { return 1; }
        if(a.attributes.price > b.attributes.price) { return -1; }
        return 0;
      })
    },
    selectProduct(product) {
      this.localProducts.map(item => {
        item.default = item.id === product.id;
      })
    },
    selectVariant(product, variant) {
      this.localProducts[this.localProducts.indexOf(product)].variants.map(item => {
        item.default = item.id === variant.id;
      })
    },
    toContactForm() {
      let product = this.localProducts.find(item => item.default);
      let productVariant = {};
      this.localProducts.find(item => {
        if (item.default) {
          productVariant = item.variants.find(variant => variant.default);
        }
      })
      this.setFlowEvent(
          {
            event: "user-selected-product",
            payload: {
              product: {
                data: product,
                type: "product"
              },
              product_variant: {
                data: productVariant,
                type: "product_variant"
              }
            }
          }
      )
        .then(() => {
          this.SET_FLOW_DATA_TO_STORE({ key: "selectedProduct", value: {
              data: product,
              type: "product"
            }
          });
          this.SET_FLOW_DATA_TO_STORE({ key: "productVariant", value: {
              data: productVariant,
              type: "product_variant"
            }
          });
          this.$router.push({ name: 'ContactForm' });
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
    cursor: pointer;
  }
  .ui-card {
    cursor: pointer;
    &.default {
      box-shadow: 0 0 5px 0 #5977ea;
    }
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
