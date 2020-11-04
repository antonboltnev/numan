import "@vue/test-utils";
import { testFactory } from "@/utilites/factory";
import flushPromises from "flush-promises";
import ContactForm from "@/components/ContactForm";

describe("ContactForm.vue", () => {
  const factory = () => {
    const actions = {
      setFlowEvent: jest.fn((context, params) => {
        return { context, params };
      }),
    };
    const mutations = {
      SET_FLOW_DATA_TO_STORE: jest.fn((state, params) => {
        return { state, params };
      }),
    };
    let wrapper = testFactory(ContactForm, {
      store: {
        actions: actions,
        mutations: mutations
      },
    }).wrapper;

    return {
      wrapper: wrapper,
      actions: actions,
      mutations: mutations
    };
  };

  it("check default Data", function () {
    let { wrapper } = factory()
    expect(wrapper.vm.firstName).toBeNull()
    expect(wrapper.vm.lastName).toBeNull()
    expect(wrapper.vm.phone).toBeNull()
    expect(wrapper.vm.email).toBeNull()
  });

  it("clearInputValue()", function () {
    let { wrapper } = factory()
    wrapper.setData({ firstName: "Tomas" })

    wrapper.vm.clearInputValue("firstName")

    expect(wrapper.vm.firstName).toBeNull()
  });

  //TODO: some stupid problem with Jest testing $refs in component. Gotta find out and fix

  // it("toConfirmationPage()", async function () {
  //   let { wrapper, actions } = factory();
  //   wrapper.setData({ firstName: "Tomas" })
  //   wrapper.setData({ lastName: "Brush" })
  //   wrapper.setData({ phone: "55544433322" })
  //   wrapper.setData({ email: "Tomas@gmail.com" })
  //
  //   wrapper.vm.toConfirmationPage();
  //
  //   await flushPromises();
  //
  //   expect(actions.setFlowEvent.mock.results[0].value.params).toEqual({
  //     key: "userData",
  //     value: {
  //       type: "user_data",
  //       data: {
  //         attributes: {
  //           firstName: wrapper.vm.firstName,
  //           lastName: wrapper.vm.lastName,
  //           phone: wrapper.vm.phone,
  //           email: wrapper.vm.email,
  //         },
  //       },
  //     },
  //   });
  // });

});
