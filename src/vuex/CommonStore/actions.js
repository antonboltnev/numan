import axios from "axios";

const baseUrl = process.env.VUE_APP_BASE_URL;

export default {
  generateUserId({ commit }) {
    let id = Math.floor(Math.random() * 1000);
    commit("SET_USER_ID", id);
  },
  fetchProducts({ commit }) {
    return new axios.get(baseUrl + "v1/product_categories")
      .then((res) => {
        commit("SET_PRODUCT_DATA", res.data);
        commit(
          "Notifications/ADD_ITEM_NOTIFICATION",
          {
            type: "success",
            message: "Fetch success!",
          },
          { root: true }
        );
        return res.data;
      })
      .catch((err) => {
        commit(
          "Notifications/ADD_ITEM_NOTIFICATION",
          {
            type: "error",
            message: err.detail || err,
          },
          { root: true }
        );
        return err;
      });
  },
  setCategory({ commit }, category) {
    commit("SELECT_CATEGORY", category);
  },
  setFlowEvent({ commit, dispatch, state }, { event, payload }) {
    if (!state.userId) {
      dispatch("generateUserId");
    }
    return axios
      .post(baseUrl + "v1/events", {
        user_id: state.userId,
        data: payload,
        type: event,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        commit(
          "Notifications/ADD_ITEM_NOTIFICATION",
          {
            type: "error",
            message: err.detail || err,
          },
          { root: true }
        );
        return err;
      });
  },
};
