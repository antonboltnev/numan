<template>
  <div class="ui-notifications">
    <transition-group
      class="ui-notifications__tansit-wrapper"
      name="ui-notifications-transition"
    >
      <div
        class="ui-notifications__content"
        v-for="notif in localNotifs"
        :class="notif.type"
        :key="notif.id + notif.message"
      >
        <ui-grid>
          <ui-grid-col size-w="auto">
            <div class="content__text-content">
              <ui-grid
                :class="
                  notif.message.length > 150 ? 'align-end' : 'align-center'
                "
              >
                <ui-grid-col size-w="auto">
                  <div>{{ notif.message }}</div>
                </ui-grid-col>
              </ui-grid>
            </div>
          </ui-grid-col>
          <slot name="actions"></slot>
        </ui-grid>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "UiNotifications",
  props: {
    notifications: {
      type: Array,
      default() {
        return [];
      },
    },
    vanishTimeout: {
      type: Number,
      default: 3000,
    },
  },
  computed: {
    localNotifs() {
      this.notifications.filter((item) => {
        if (!item.permanent) {
          setTimeout(() => {
            this.$emit("close-notification", item.id, item.type);
          }, this.vanishTimeout);
        }
      });
      return this.notifications;
    },
  }
};
</script>

<style lang="scss">
.ui-notifications {
  position: fixed;
  top: 90px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1001;

  &__tansit-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__content {
    display: inline-block;
    border: solid 1px transparent;
    border-radius: 5px;
    min-height: 64px;
    width: 590px;
    padding: 0 16px;
    margin-bottom: $paddingContainer * 2;
    color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
    background: #707070;


    &.error {
      background: #dd5a5a;
    }

    &.warning {
      background: #ca9333;
    }

    &.success {
      background: #5fc15f;
    }

    &.info {
      background: #4499ec;
    }
  }
}
</style>
