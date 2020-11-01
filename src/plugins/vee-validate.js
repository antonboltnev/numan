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
  max_value,
  regex,
  min_value,
  min,
  max
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
extend("emptyAddress", value => {
  if (!value) return "Поле {_field_} должно быть заполнено!";
  if (typeof value === "string") {
    return true;
  } else if (typeof value === "object" && value["kladr"] !== null) {
    return true;
  }
  if (!value.city && !value.settlement && !value.area)
    return "Поле {_field_} должно быть заполнено!";
});

extend("required", {
  ...required
});

extend("max_value", {
  ...max_value
});

extend("regex", {
  ...regex
});

extend("min_value", {
  ...min_value
});

extend("min", {
  ...min
});

extend("max", {
  ...max
});
