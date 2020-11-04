import Vue from 'vue'
import App from './App.vue'
import store from "@/vuex"
import router from "@/router";
import 'material-design-icons-iconfont'
import "./assets/styles/styles.scss"

import "@/plugins/vee-validate"

Vue.config.productionTip = false


//components
import UiBtn from "@/components/ui/UiBtn"
import UiCard from "@/components/ui/UiCard";
import UiGrid from "@/components/ui/UiGrid";
import UiGridCol from "@/components/ui/UiGridCol";
import UiTextfield from "@/components/ui/UiTextfield";
import UiNotifications from "@/components/ui/UiNotifications";

Vue.component("ui-btn", UiBtn);
Vue.component("ui-card", UiCard);
Vue.component("ui-grid", UiGrid);
Vue.component("ui-grid-col", UiGridCol);
Vue.component("ui-textfield", UiTextfield);
Vue.component("ui-notifications", UiNotifications);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
