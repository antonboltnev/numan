import "@vue/test-utils";
import { testFactory } from "@/utilites/factory";
import App from "@/App";

describe("App.vue", () => {
  const factory = () => {
    const state = {
      error: [],
      success: [],
      warning: [],
      info: []
    };
    let wrapper = testFactory(App, {
      store: {
        state: state,
      },
    }).wrapper;

    return {
      wrapper: wrapper,
      state: state,
    };
  };

  it("Check the default mapState", function () {
    let { wrapper, state } = factory();
    expect(wrapper.vm.error).toEqual(state.error);
    expect(wrapper.vm.success).toEqual(state.success);
    expect(wrapper.vm.warning).toEqual(state.warning);
    expect(wrapper.vm.info).toEqual(state.info);
  });

  it("notifications", function () {
    let { wrapper } = factory();
    expect(wrapper.vm.notifications).toEqual([])
  });

});
