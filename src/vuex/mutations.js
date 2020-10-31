import Vue from "vue"

export default {
  SET_USER_ID(state, id) {
    state.userId = id;
  },
  SET_PRODUCT_DATA(state, products) {
    state.products = products;
    state.products.data.sort(function(a, b){
      if(a.attributes.name < b.attributes.name) { return -1; }
      if(a.attributes.name > b.attributes.name) { return 1; }
      return 0;
    })
    state.products.data.map(item => {
      Vue.set(item, "selected", false)
    })
  },
  SELECT_CATEGORY(state, category) {
    state.products.data.map(item => {
      item.selected = false;
    })
    state.products.data.find(item => {
      if (item.id === category.id) {
        item.selected = true;
      }
    })
  }
}
