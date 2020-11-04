import { mount } from "@vue/test-utils";
import UiTextfield from "@/components/ui/UiTextfield";
import {stubComponent} from "@/utilites/factory";

const UiGrid = stubComponent("ui-grid-col");
const UiGridCol = stubComponent("ui-grid");

describe("UiTextfield", () => {
  function factory({ props } = {}) {
    return mount(UiTextfield, {
      stubs: { UiGrid, UiGridCol },
      propsData: props || {},
    });
  }

  it("Check default props", () => {
    const props = {
      value: undefined,
      placeholder: undefined,
      errors: undefined,
    };
    const wrapper = factory({ props });

    expect(wrapper.props("value")).toEqual("");
    expect(wrapper.props("placeholder")).toEqual("");
    expect(wrapper.props("errors")).toEqual([]);
  });
});
