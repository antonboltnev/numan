<template>
  <div :class="cssClass">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "UiGridCol",

    props: {
      sizeW: {
        type: [Number, String],
        default: null
      },
      sizeWXs: {
        type: [Number, String],
        default: null
      },
      sizeWSm: {
        type: [Number, String],
        default: null
      },
      sizeWMd: {
        type: [Number, String],
        default: null
      },
      sizeWLg: {
        type: [Number, String],
        default: null
      }
    },

    computed: {
      cssClass() {
        let list = ["ui-grid__col"];
        let { sizeW, sizeWXs, sizeWSm, sizeWMd, sizeWLg } = this.$props;

        if (sizeW) list.push("ui-grid__col_" + sizeW);
        if (sizeWXs) list.push("ui-grid__col_xs-" + sizeWXs);
        if (sizeWSm) list.push("ui-grid__col_sm-" + sizeWSm);
        if (sizeWMd) list.push("ui-grid__col_md-" + sizeWMd);
        if (sizeWLg) list.push("ui-grid__col_lg-" + sizeWLg);

        return list.join(" ");
      }
    }
  };
</script>

<style lang="scss">
  .ui-grid {
    & > .ui-grid__col {
      padding: 15px;
    }
    & > .ui-grid__col.ui-grid__col_auto {
      flex: 1 1 0;
    }

    @media (max-width: 576px) {
      & > .ui-grid__col.ui-grid__col_xs-auto {
        flex: 1 1 0;
      }
    }

    @media (min-width: 576px) and (max-width: 767px) {
      & > .ui-grid__col.ui-grid__col_sm-auto {
        flex: 1 1 0;
      }
    }

    @media (min-width: 768px) and (max-width: 992px) {
      & > .ui-grid__col.ui-grid__col_md-auto {
        flex: 1 1 0;
      }
    }

    @media (min-width: 992px) {
      & > .ui-grid__col.ui-grid__col_lg-auto {
        flex: 1 1 0;
      }
    }
  }
</style>
