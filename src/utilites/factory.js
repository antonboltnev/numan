import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import "@vue/test-utils";
import { createLocalVue, shallowMount } from "@vue/test-utils";

import CommonStore from "@/vuex/CommonStore";
import NotificationsStore from "@/vuex/Notifications";

Vue.use(Vuex);

import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import UiBtn from "@/components/ui/UiBtn";
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

export function stubComponent(name) {
  return Vue.component(name, {
    template: "<div>stub</div>",
  });
}

export function testFactory(cmp, options) {
  const _defaultStore = () => {
    return { state: {}, getters: {}, mutations: {}, actions: {} };
  };
  let tempStore = _defaultStore();
  let localStore = _defaultStore();

  let optionsStore = options && options.store ? options.store : tempStore;

  localStore.state = CommonStore.state;
  localStore.mutations = CommonStore.mutations;
  localStore.actions = CommonStore.actions;

  let storeMain = {
    namespaced: true,
    state: { ...localStore.state, ...optionsStore.state },
    mutations: { ...localStore.mutations, ...optionsStore.mutations },
    actions: { ...localStore.actions, ...optionsStore.actions },
  };

  let storeNotifications = {
    namespaced: true,
    state: { ...NotificationsStore.state, ...optionsStore.state },
    mutations: { ...NotificationsStore.mutations, ...optionsStore.mutations },
    actions: { ...NotificationsStore.actions, ...optionsStore.actions },
  };

  let store = new Vuex.Store({
    modules: {
      Notifications: storeNotifications,
      CommonStore: storeMain,
    },
  });

  let optionsValidate = {
    $validator: options && options.$validator ? options.$validator : {},
  };

  let localVue = createLocalVue();
  let router = new VueRouter();
  localVue.use(VueRouter);

  let wrapper = shallowMount(cmp, {
    localVue,
    router,
    store,
    propsData: options && options.propsData ? options.propsData : {},
    stubs: options && options.stubs ? options.stubs : {},
    provide: () => optionsValidate,
  });

  return {
    wrapper: wrapper,
    store: store,
    stubs: options && options.stubs ? options.stubs : {},
    options: options,
  };
}
