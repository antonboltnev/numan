import { mount } from "@vue/test-utils";
import UiGrid from "@/components/ui/UiGrid";
import { stubComponent } from "@/utilites/factory";

describe("ui-grid", () => {
  function factory({ slots } = {}) {
    return mount(UiGrid, {
      slots: slots || {}
    });
  }

  it("Check default slots", () => {
    const slot = stubComponent("slot-component");
    const slots = { default: slot, test: slot };
    const wrapper = factory({ slots });

    wrapper.findAllComponents(slot);
    expect(slot).toHaveLength(1);
  });
});
