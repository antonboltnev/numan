import Vue from "vue";
import {
  setInteractionMode,
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate";
import {
  required,
  regex,
  email
} from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json"

//localize
localize("en", en);

// components
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

setInteractionMode("blur", () => {
  return { on: ["blur"] };
});

// rules
extend("required", {
  ...required
});

extend("regex", {
  ...regex
});

extend("email", {
  ...email
});
