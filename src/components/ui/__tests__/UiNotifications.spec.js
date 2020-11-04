import { mount } from "@vue/test-utils";
import UiNotifications from "@/components/ui/UiNotifications";
import { stubComponent } from "@/utilites/factory";

const UiGrid = stubComponent("ui-grid-col");
const UiGridCol = stubComponent("ui-grid");

describe("UiNotifications", () => {
  function factory({ props } = {}) {
    return mount(UiNotifications, {
      stubs: { UiGrid, UiGridCol },
      propsData: props || {}
    });
  }

  it("Check default props", () => {
    const props = {
      notifications: undefined,
      vanishTimeout: undefined
    };
    const wrapper = factory({ props });
    expect(wrapper.props("notifications")).toStrictEqual([]);
    expect(wrapper.props("vanishTimeout")).toBe(3000);
  });
});
