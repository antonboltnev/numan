<template>
  <div id="app">
    <ui-notifications
      :notifications="notifications"
      @close-notification="(id, type) => DELETE_ITEM_NOTIFICATION({ id, type })"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState("Notifications", {
      error: state => state.error,
      success: state => state.success,
      warning: state => state.warning,
      info: state => state.info
    }),
    notifications() {
      return [...this.error, ...this.success, ...this.info, ...this.warning];
    }
  },
  methods: {
    ...mapMutations("Notifications", ["DELETE_ITEM_NOTIFICATION"]),
  },
};
</script>
