import "@vue/test-utils";
import { testFactory } from "@/utilites/factory";
import Categories from "@/components/Categories";

describe("Categories.vue", () => {
  const factory = () => {
    const state = {
      products: {},
      totalPathData: {
        category: null,
        selectedProduct: null,
        productVariant: null,
        userData: null,
      },
    };
    const actions = {
      fetchProducts: jest.fn((context, params) => {
        return { context, params };
      }),
      setCategory: jest.fn((context, params) => {
        return { context, params };
      }),
      setFlowEvent: jest.fn((context, params) => {
        return { context, params };
      }),
    };
    const mutations = {
      SET_FLOW_DATA_TO_STORE: jest.fn((state, params) => {
        return { state, params };
      }),
    };
    let wrapper = testFactory(Categories, {
      store: {
        state: state,
        actions: actions,
        mutations: mutations,
      },
    }).wrapper;

    return {
      wrapper: wrapper,
      state: state,
      actions: actions,
      mutations: mutations
    };
  };

  it("Check the default mapState", function () {
    let { wrapper, state, actions } = factory();
    expect(actions.fetchProducts.mock.calls).toHaveLength(1);
    expect(wrapper.vm.products).toStrictEqual(state.products);
  });

  it("selectCategory()", function () {
    let { wrapper, actions } = factory();

    let category = {
      id: "123"
    }
    wrapper.vm.selectCategory(category);

    expect(actions.setCategory.mock.results[0].value.params).toEqual(category);
  });

});
