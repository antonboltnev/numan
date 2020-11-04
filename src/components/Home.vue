<template>
  <div class="Main ui-ta_center">
    <h1>Welcome dear visitor!</h1>
    <ui-grid class="row justify-center">
      <ui-grid-col size-w="50">
        <ui-btn @click="toCategories">
          <span>Get started</span>
        </ui-btn>
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Main",
  methods: {
    ...mapActions("CommonStore", ["setFlowEvent"]),
    toCategories() {
      this.setFlowEvent({
        event: "user-started-flow",
        payload: { page: "Home" },
      }).then(() => {
        this.$router.push({ name: "Categories" });
      });
    },
  },
};
</script>

<style lang="scss"></style>
