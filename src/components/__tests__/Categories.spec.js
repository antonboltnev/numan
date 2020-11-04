import "@vue/test-utils";
import { testFactory } from "@/utilites/factory";
import Categories from "@/components/Categories";

describe("Categories.vue", () => {
  const factory = () => {
    const state = {
      products: {
        data: []
      },
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
      ADD_ITEM_NOTIFICATION: jest.fn((state, params) => {
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
      mutations: mutations,
    };
  };

  it("Check the default mapState", function () {
    let { wrapper, state, actions } = factory();
    expect(actions.fetchProducts).toHaveBeenCalled()
    expect(wrapper.vm.products).toEqual(state.products);
  });

  it("selectCategory()", function () {
    let { wrapper, actions } = factory();

    let category = {
      id: "123",
    };
    wrapper.vm.selectCategory(category);

    expect(actions.setCategory.mock.results[0].value.params).toEqual(category);
  });

  it("toProductList()", function () {
    let { wrapper, state, actions } = factory();
    let product = {
      id: "e26a9d01-fbdb-4e12-aff5-a6e3aa86bf17",
      type: "product_category",
      attributes: {
        name: "Blood tests",
        slug: "blood-tests",
        default_product_id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7",
        active: true,
        position: 4,
      },
      relationships: {
        default_product: {
          data: { id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7", type: "product" },
        },
        products: {
          data: [
            { id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7", type: "product" },
          ],
        },
      },
      links: { self: "/v1/product_categories/blood-tests" },
      selected: true,
    };
    state.products.data = [product];
    wrapper.vm.toProductList();


    expect(actions.setFlowEvent.mock.results[0].value.params).toEqual({
      event: "user-selected-category",
      payload: {
        attributes: {
          category: product.attributes.name,
        },
      },
    });

  });

  it("To throw error if no category selected", function () {
    let { wrapper, state, mutations } = factory();
    let product = {
      id: "e26a9d01-fbdb-4e12-aff5-a6e3aa86bf17",
      type: "product_category",
      attributes: {
        name: "Blood tests",
        slug: "blood-tests",
        default_product_id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7",
        active: true,
        position: 4,
      },
      relationships: {
        default_product: {
          data: { id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7", type: "product" },
        },
        products: {
          data: [
            { id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7", type: "product" },
          ],
        },
      },
      links: { self: "/v1/product_categories/blood-tests" },
      selected: false,
    };
    state.products.data = [product];
    wrapper.vm.toProductList();

    expect(mutations.ADD_ITEM_NOTIFICATION.mock.results[0].value.params).toEqual({
      type: "error",
      message: "Please select category! -_-"
    });

  });

});
