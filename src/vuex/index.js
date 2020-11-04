import Vue from "vue";
import Vuex from "vuex";

//modules
import NotificationsStore from "@/vuex/Notifications";
import CommonStore from "@/vuex/CommonStore";


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    Notifications: NotificationsStore,
    CommonStore: CommonStore
  }
});

export default store;
