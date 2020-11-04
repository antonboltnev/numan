import { mount } from "@vue/test-utils";
import UiGridCol from "@/components/ui/UiGridCol";
import { stubComponent } from "@/utilites/factory";

describe("UiGridCol", () => {
  function factory({ props, slots } = {}) {
    return mount(UiGridCol, {
      propsData: props || {},
      slots: slots || {}
    });
  }

  it("Check default props", () => {
    const props = {
      sizeW: undefined,
      sizeWXs: undefined,
      sizeWSm: undefined,
      sizeWMd: undefined,
      sizeWLg: undefined
    };
    const wrapper = factory({ props });

    expect(wrapper.props("sizeW")).toBeNull();
    expect(wrapper.props("sizeWXs")).toBeNull();
    expect(wrapper.props("sizeWSm")).toBeNull();
    expect(wrapper.props("sizeWMd")).toBeNull();
    expect(wrapper.props("sizeWLg")).toBeNull();
  });

  it("Check default slots", () => {
    const slot = stubComponent("slot-component");
    const slots = { default: slot, test: slot };
    const wrapper = factory({ slots });

    wrapper.findAllComponents(slot);
    expect(slot).toHaveLength(1);
  });

  it("Check classes than depend on props", () => {
    let props = {};
    let wrapper;

    wrapper = factory({ props });
    expect(wrapper.classes()).toContain("ui-grid__col");

    props["sizeW"] = 50;
    wrapper = factory({ props });
    expect(wrapper.classes()).toEqual(["ui-grid__col", "ui-grid__col_50"]);

    props["sizeWXs"] = 30;
    wrapper = factory({ props });
    expect(wrapper.classes()).toEqual([
      "ui-grid__col",
      "ui-grid__col_50",
      "ui-grid__col_xs-30"
    ]);

    props["sizeWSm"] = "auto";
    wrapper = factory({ props });
    expect(wrapper.classes()).toEqual([
      "ui-grid__col",
      "ui-grid__col_50",
      "ui-grid__col_xs-30",
      "ui-grid__col_sm-auto"
    ]);

    props["sizeWMd"] = "auto";
    wrapper = factory({ props });
    expect(wrapper.classes()).toEqual([
      "ui-grid__col",
      "ui-grid__col_50",
      "ui-grid__col_xs-30",
      "ui-grid__col_sm-auto",
      "ui-grid__col_md-auto"
    ]);

    props["sizeWLg"] = "1000";
    wrapper = factory({ props });
    expect(wrapper.classes()).toEqual([
      "ui-grid__col",
      "ui-grid__col_50",
      "ui-grid__col_xs-30",
      "ui-grid__col_sm-auto",
      "ui-grid__col_md-auto",
      "ui-grid__col_lg-1000"
    ]);
  });
});
