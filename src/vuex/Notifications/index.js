import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import state from "./state";

const NotificationsStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default NotificationsStore;
