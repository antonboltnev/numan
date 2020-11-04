import "@vue/test-utils";
import { testFactory } from "@/utilites/factory";
import Home from "@/components/Home";

describe("Home.vue", () => {
  const factory = () => {
    const actions = {
      setFlowEvent: jest.fn((context, params) => {
        return { context, params };
      }),
    };
    let wrapper = testFactory(Home, {
      store: {
        actions: actions,
      },
    }).wrapper;

    return {
      wrapper: wrapper,
      actions: actions,
    };
  };

  it("toCategories()", function () {
    let { wrapper, actions } = factory();
    wrapper.vm.toCategories();


    expect(actions.setFlowEvent.mock.results[0].value.params).toEqual({
      event: "user-started-flow",
      payload: { page: "Home" },
    });
  });

});
