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
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  },
  setCategory({ commit }, category) {
    commit("SELECT_CATEGORY", category);
  },
  setFlowEvent(context, { event, payload }) {
    if (!context.state.userId) {
      context.dispatch("generateUserId");
    }
    return axios
      .post(baseUrl + "v1/events", {
        user_id: context.state.userId,
        data: payload,
        type: event,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};
