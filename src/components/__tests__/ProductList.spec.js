import "@vue/test-utils";
import { testFactory } from "@/utilites/factory";
import ProductList from "@/components/ProductList";

describe("Categories.vue", () => {
  const factory = () => {
    const state = {
      products: {
        data: [],
        included: [],
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
      SET_FLOW_DATA_TO_STORE: jest.fn((state, params) => {
        return { state, params };
      }),
    };
    let wrapper = testFactory(ProductList, {
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
    let { wrapper, state } = factory();
    expect(wrapper.vm.products).toEqual(state.products);
  });

  it("getProductList()", function () {
    let { wrapper, state } = factory();
    let products = [
      {
        id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
        type: "product",
        attributes: {
          name: "Sildenafil",
          slug: "sildenafil",
          alt_name: "Generic Viagra",
          category_id: "b147724b-7090-43d1-86e1-6ac334a1142c",
          default_product_variant_id: "cbe68530-8258-4575-ad19-bf1e7728c299",
          prescription_required: true,
          questionnaire_required: true,
          medicine: true,
          active: true,
          position: 1,
        },
        relationships: {
          default_product_variant: {
            data: {
              id: "cbe68530-8258-4575-ad19-bf1e7728c299",
              type: "product_variant",
            },
          },
          product_variants: {
            data: [
              {
                id: "bd07e338-8bb9-4afa-b2dc-a44723fa716d",
                type: "product_variant",
              },
              {
                id: "111348ef-d012-41fd-aa27-3f6941366562",
                type: "product_variant",
              },
              {
                id: "eac51aeb-7fcc-41b3-b21f-28333407ba43",
                type: "product_variant",
              },
              {
                id: "cbe68530-8258-4575-ad19-bf1e7728c299",
                type: "product_variant",
              },
              {
                id: "e87b9a4b-cc1f-4815-9816-a3a971e657ba",
                type: "product_variant",
              },
              {
                id: "8450904a-d1ad-41a7-9dc4-e947edf67716",
                type: "product_variant",
              },
              {
                id: "a4867764-5584-4e34-951c-1300f7540185",
                type: "product_variant",
              },
              {
                id: "6cb9454c-f932-4fc6-917f-003c8fc32d40",
                type: "product_variant",
              },
              {
                id: "8b8b9d89-4f28-4c24-89b6-ce08349bab33",
                type: "product_variant",
              },
              {
                id: "0f536db9-3400-4ade-a63a-a422a65c0c2f",
                type: "product_variant",
              },
              {
                id: "6a995cbd-9057-4a42-92c9-7f69bf627b51",
                type: "product_variant",
              },
              {
                id: "ca42c3c6-7bee-4ef3-a729-84f0832deb05",
                type: "product_variant",
              },
              {
                id: "9ba8fd16-0ecb-4370-b67e-63d61b67e8b9",
                type: "product_variant",
              },
              {
                id: "619dc240-242d-4c8f-be8c-43273940b74a",
                type: "product_variant",
              },
              {
                id: "17d405d6-5d4f-479c-b6ca-b54f28736ab9",
                type: "product_variant",
              },
              {
                id: "fbae4187-0e29-46cc-8566-012af61a6195",
                type: "product_variant",
              },
            ],
          },
        },
        default: true,
        variants: [],
      },
    ];
    state.products.data = [
      {
        id: "b147724b-7090-43d1-86e1-6ac334a1142c",
        type: "product_category",
        attributes: {
          name: "Erectile dysfunction",
          slug: "erectile-dysfunction",
          default_product_id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
          active: true,
          position: 1,
        },
        relationships: {
          default_product: {
            data: {
              id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
              type: "product",
            },
          },
          products: {
            data: [
              { id: "3650fb30-e70b-444a-9c16-cdff83dd24b1", type: "product" },
              { id: "15a70918-c650-4a45-b701-ba0eff3b0c88", type: "product" },
              { id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb", type: "product" },
              { id: "cc1a3907-9875-4b8c-9b7b-40a3b34748be", type: "product" },
            ],
          },
        },
        links: { self: "/v1/product_categories/erectile-dysfunction" },
        selected: true,
      },
    ];
    state.products.included = [
      {
        id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
        type: "product",
        attributes: {
          name: "Sildenafil",
          slug: "sildenafil",
          alt_name: "Generic Viagra",
          category_id: "b147724b-7090-43d1-86e1-6ac334a1142c",
          default_product_variant_id: "cbe68530-8258-4575-ad19-bf1e7728c299",
          prescription_required: true,
          questionnaire_required: true,
          medicine: true,
          active: true,
          position: 1,
        },
        relationships: {
          default_product_variant: {
            data: {
              id: "cbe68530-8258-4575-ad19-bf1e7728c299",
              type: "product_variant",
            },
          },
          product_variants: {
            data: [
              {
                id: "bd07e338-8bb9-4afa-b2dc-a44723fa716d",
                type: "product_variant",
              },
              {
                id: "111348ef-d012-41fd-aa27-3f6941366562",
                type: "product_variant",
              },
              {
                id: "eac51aeb-7fcc-41b3-b21f-28333407ba43",
                type: "product_variant",
              },
              {
                id: "cbe68530-8258-4575-ad19-bf1e7728c299",
                type: "product_variant",
              },
              {
                id: "e87b9a4b-cc1f-4815-9816-a3a971e657ba",
                type: "product_variant",
              },
              {
                id: "8450904a-d1ad-41a7-9dc4-e947edf67716",
                type: "product_variant",
              },
              {
                id: "a4867764-5584-4e34-951c-1300f7540185",
                type: "product_variant",
              },
              {
                id: "6cb9454c-f932-4fc6-917f-003c8fc32d40",
                type: "product_variant",
              },
              {
                id: "8b8b9d89-4f28-4c24-89b6-ce08349bab33",
                type: "product_variant",
              },
              {
                id: "0f536db9-3400-4ade-a63a-a422a65c0c2f",
                type: "product_variant",
              },
              {
                id: "6a995cbd-9057-4a42-92c9-7f69bf627b51",
                type: "product_variant",
              },
              {
                id: "ca42c3c6-7bee-4ef3-a729-84f0832deb05",
                type: "product_variant",
              },
              {
                id: "9ba8fd16-0ecb-4370-b67e-63d61b67e8b9",
                type: "product_variant",
              },
              {
                id: "619dc240-242d-4c8f-be8c-43273940b74a",
                type: "product_variant",
              },
              {
                id: "17d405d6-5d4f-479c-b6ca-b54f28736ab9",
                type: "product_variant",
              },
              {
                id: "fbae4187-0e29-46cc-8566-012af61a6195",
                type: "product_variant",
              },
            ],
          },
        },
      },
    ];

    wrapper.vm.getProductList();

    expect(wrapper.vm.localProducts).toEqual(products);
  });

  it("selectProduct()", function () {
    let { wrapper } = factory();
    wrapper.vm.localProducts = [
      {
        id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
        type: "product",
        attributes: {
          name: "Sildenafil",
          slug: "sildenafil",
          alt_name: "Generic Viagra",
          category_id: "b147724b-7090-43d1-86e1-6ac334a1142c",
          default_product_variant_id: "cbe68530-8258-4575-ad19-bf1e7728c299",
          prescription_required: true,
          questionnaire_required: true,
          medicine: true,
          active: true,
          position: 1,
        },
        relationships: {
          default_product_variant: {
            data: {
              id: "cbe68530-8258-4575-ad19-bf1e7728c299",
              type: "product_variant",
            },
          },
          product_variants: {
            data: [
              {
                id: "bd07e338-8bb9-4afa-b2dc-a44723fa716d",
                type: "product_variant",
              },
              {
                id: "111348ef-d012-41fd-aa27-3f6941366562",
                type: "product_variant",
              },
              {
                id: "eac51aeb-7fcc-41b3-b21f-28333407ba43",
                type: "product_variant",
              },
              {
                id: "cbe68530-8258-4575-ad19-bf1e7728c299",
                type: "product_variant",
              },
              {
                id: "e87b9a4b-cc1f-4815-9816-a3a971e657ba",
                type: "product_variant",
              },
              {
                id: "8450904a-d1ad-41a7-9dc4-e947edf67716",
                type: "product_variant",
              },
              {
                id: "a4867764-5584-4e34-951c-1300f7540185",
                type: "product_variant",
              },
              {
                id: "6cb9454c-f932-4fc6-917f-003c8fc32d40",
                type: "product_variant",
              },
              {
                id: "8b8b9d89-4f28-4c24-89b6-ce08349bab33",
                type: "product_variant",
              },
              {
                id: "0f536db9-3400-4ade-a63a-a422a65c0c2f",
                type: "product_variant",
              },
              {
                id: "6a995cbd-9057-4a42-92c9-7f69bf627b51",
                type: "product_variant",
              },
              {
                id: "ca42c3c6-7bee-4ef3-a729-84f0832deb05",
                type: "product_variant",
              },
              {
                id: "9ba8fd16-0ecb-4370-b67e-63d61b67e8b9",
                type: "product_variant",
              },
              {
                id: "619dc240-242d-4c8f-be8c-43273940b74a",
                type: "product_variant",
              },
              {
                id: "17d405d6-5d4f-479c-b6ca-b54f28736ab9",
                type: "product_variant",
              },
              {
                id: "fbae4187-0e29-46cc-8566-012af61a6195",
                type: "product_variant",
              },
            ],
          },
        },
        default: false,
        variants: [],
      },
    ];
    wrapper.vm.selectProduct({
      id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
      type: "product",
      attributes: {
        name: "Sildenafil",
        slug: "sildenafil",
        alt_name: "Generic Viagra",
        category_id: "b147724b-7090-43d1-86e1-6ac334a1142c",
        default_product_variant_id: "cbe68530-8258-4575-ad19-bf1e7728c299",
        prescription_required: true,
        questionnaire_required: true,
        medicine: true,
        active: true,
        position: 1,
      },
      relationships: {
        default_product_variant: {
          data: {
            id: "cbe68530-8258-4575-ad19-bf1e7728c299",
            type: "product_variant",
          },
        },
        product_variants: {
          data: [
            {
              id: "bd07e338-8bb9-4afa-b2dc-a44723fa716d",
              type: "product_variant",
            },
            {
              id: "111348ef-d012-41fd-aa27-3f6941366562",
              type: "product_variant",
            },
            {
              id: "eac51aeb-7fcc-41b3-b21f-28333407ba43",
              type: "product_variant",
            },
            {
              id: "cbe68530-8258-4575-ad19-bf1e7728c299",
              type: "product_variant",
            },
            {
              id: "e87b9a4b-cc1f-4815-9816-a3a971e657ba",
              type: "product_variant",
            },
            {
              id: "8450904a-d1ad-41a7-9dc4-e947edf67716",
              type: "product_variant",
            },
            {
              id: "a4867764-5584-4e34-951c-1300f7540185",
              type: "product_variant",
            },
            {
              id: "6cb9454c-f932-4fc6-917f-003c8fc32d40",
              type: "product_variant",
            },
            {
              id: "8b8b9d89-4f28-4c24-89b6-ce08349bab33",
              type: "product_variant",
            },
            {
              id: "0f536db9-3400-4ade-a63a-a422a65c0c2f",
              type: "product_variant",
            },
            {
              id: "6a995cbd-9057-4a42-92c9-7f69bf627b51",
              type: "product_variant",
            },
            {
              id: "ca42c3c6-7bee-4ef3-a729-84f0832deb05",
              type: "product_variant",
            },
            {
              id: "9ba8fd16-0ecb-4370-b67e-63d61b67e8b9",
              type: "product_variant",
            },
            {
              id: "619dc240-242d-4c8f-be8c-43273940b74a",
              type: "product_variant",
            },
            {
              id: "17d405d6-5d4f-479c-b6ca-b54f28736ab9",
              type: "product_variant",
            },
            {
              id: "fbae4187-0e29-46cc-8566-012af61a6195",
              type: "product_variant",
            },
          ],
        },
      },
      default: true,
      variants: [],
    });

    expect(expect(wrapper.vm.localProducts[0].default)).toBeTruthy();
  });

  it("selectVariant()", function () {
    let { wrapper } = factory();
    wrapper.vm.localProducts = [
      {
        id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
        type: "product",
        attributes: {
          name: "Sildenafil",
          slug: "sildenafil",
          alt_name: "Generic Viagra",
          category_id: "b147724b-7090-43d1-86e1-6ac334a1142c",
          default_product_variant_id: "cbe68530-8258-4575-ad19-bf1e7728c299",
          prescription_required: true,
          questionnaire_required: true,
          medicine: true,
          active: true,
          position: 1,
        },
        relationships: {
          default_product_variant: {
            data: {
              id: "cbe68530-8258-4575-ad19-bf1e7728c299",
              type: "product_variant",
            },
          },
          product_variants: {
            data: [
              {
                id: "bd07e338-8bb9-4afa-b2dc-a44723fa716d",
                type: "product_variant",
              },
              {
                id: "111348ef-d012-41fd-aa27-3f6941366562",
                type: "product_variant",
              },
              {
                id: "eac51aeb-7fcc-41b3-b21f-28333407ba43",
                type: "product_variant",
              },
              {
                id: "cbe68530-8258-4575-ad19-bf1e7728c299",
                type: "product_variant",
              },
              {
                id: "e87b9a4b-cc1f-4815-9816-a3a971e657ba",
                type: "product_variant",
              },
              {
                id: "8450904a-d1ad-41a7-9dc4-e947edf67716",
                type: "product_variant",
              },
              {
                id: "a4867764-5584-4e34-951c-1300f7540185",
                type: "product_variant",
              },
              {
                id: "6cb9454c-f932-4fc6-917f-003c8fc32d40",
                type: "product_variant",
              },
              {
                id: "8b8b9d89-4f28-4c24-89b6-ce08349bab33",
                type: "product_variant",
              },
              {
                id: "0f536db9-3400-4ade-a63a-a422a65c0c2f",
                type: "product_variant",
              },
              {
                id: "6a995cbd-9057-4a42-92c9-7f69bf627b51",
                type: "product_variant",
              },
              {
                id: "ca42c3c6-7bee-4ef3-a729-84f0832deb05",
                type: "product_variant",
              },
              {
                id: "9ba8fd16-0ecb-4370-b67e-63d61b67e8b9",
                type: "product_variant",
              },
              {
                id: "619dc240-242d-4c8f-be8c-43273940b74a",
                type: "product_variant",
              },
              {
                id: "17d405d6-5d4f-479c-b6ca-b54f28736ab9",
                type: "product_variant",
              },
              {
                id: "fbae4187-0e29-46cc-8566-012af61a6195",
                type: "product_variant",
              },
            ],
          },
        },
        default: false,
        variants: [
          {
            default: false,
            id: "492c2cc1-cc9d-40cf-88d3-98d1cb098b38",
            type: "product_variant",
            attributes: {
              variant: "Testosterone, Cholesterol & Diabetes",
              price: 5500,
              quantity: 1,
              unit: "kit",
              product_id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7",
              is_subscription_based: true,
              subscription_number_of_repeats: 1,
              subscription_frequency: "1m",
              active: true,
              position: 1,
              average_monthly_quantity: null,
              dosage: "",
              dosage_quantity: null,
              dosage_unit: null,
              unit_price: 5500,
            },
            relationships: {
              product: {
                data: {
                  id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7",
                  type: "product",
                },
              },
            },
          },
        ],
      },
    ];

    wrapper.vm.selectVariant(
      wrapper.vm.localProducts[0],
      wrapper.vm.localProducts[0].variants[0]
    );

    expect(wrapper.vm.localProducts[0].variants[0].default).toBeTruthy();
  });

  it("toContactForm()", function () {
    let { wrapper, actions } = factory();
    wrapper.vm.localProducts = [
      {
        id: "3650fb30-e70b-444a-9c16-cdff83dd24b1",
        type: "product",
        attributes: {
          name: "Sildenafil",
          slug: "sildenafil",
          alt_name: "Generic Viagra",
          category_id: "b147724b-7090-43d1-86e1-6ac334a1142c",
          default_product_variant_id: "cbe68530-8258-4575-ad19-bf1e7728c299",
          prescription_required: true,
          questionnaire_required: true,
          medicine: true,
          active: true,
          position: 1,
        },
        relationships: {
          default_product_variant: {
            data: {
              id: "cbe68530-8258-4575-ad19-bf1e7728c299",
              type: "product_variant",
            },
          },
          product_variants: {
            data: [
              {
                id: "bd07e338-8bb9-4afa-b2dc-a44723fa716d",
                type: "product_variant",
              },
              {
                id: "111348ef-d012-41fd-aa27-3f6941366562",
                type: "product_variant",
              },
              {
                id: "eac51aeb-7fcc-41b3-b21f-28333407ba43",
                type: "product_variant",
              },
              {
                id: "cbe68530-8258-4575-ad19-bf1e7728c299",
                type: "product_variant",
              },
              {
                id: "e87b9a4b-cc1f-4815-9816-a3a971e657ba",
                type: "product_variant",
              },
              {
                id: "8450904a-d1ad-41a7-9dc4-e947edf67716",
                type: "product_variant",
              },
              {
                id: "a4867764-5584-4e34-951c-1300f7540185",
                type: "product_variant",
              },
              {
                id: "6cb9454c-f932-4fc6-917f-003c8fc32d40",
                type: "product_variant",
              },
              {
                id: "8b8b9d89-4f28-4c24-89b6-ce08349bab33",
                type: "product_variant",
              },
              {
                id: "0f536db9-3400-4ade-a63a-a422a65c0c2f",
                type: "product_variant",
              },
              {
                id: "6a995cbd-9057-4a42-92c9-7f69bf627b51",
                type: "product_variant",
              },
              {
                id: "ca42c3c6-7bee-4ef3-a729-84f0832deb05",
                type: "product_variant",
              },
              {
                id: "9ba8fd16-0ecb-4370-b67e-63d61b67e8b9",
                type: "product_variant",
              },
              {
                id: "619dc240-242d-4c8f-be8c-43273940b74a",
                type: "product_variant",
              },
              {
                id: "17d405d6-5d4f-479c-b6ca-b54f28736ab9",
                type: "product_variant",
              },
              {
                id: "fbae4187-0e29-46cc-8566-012af61a6195",
                type: "product_variant",
              },
            ],
          },
        },
        default: true,
        variants: [
          {
            default: true,
            id: "492c2cc1-cc9d-40cf-88d3-98d1cb098b38",
            type: "product_variant",
            attributes: {
              variant: "Testosterone, Cholesterol & Diabetes",
              price: 5500,
              quantity: 1,
              unit: "kit",
              product_id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7",
              is_subscription_based: true,
              subscription_number_of_repeats: 1,
              subscription_frequency: "1m",
              active: true,
              position: 1,
              average_monthly_quantity: null,
              dosage: "",
              dosage_quantity: null,
              dosage_unit: null,
              unit_price: 5500,
            },
            relationships: {
              product: {
                data: {
                  id: "4909e06e-a1ec-4b8f-8465-333b600f3cd7",
                  type: "product",
                },
              },
            },
          },
        ],
      },
    ];

    wrapper.vm.toContactForm();

    expect(actions.setFlowEvent.mock.calls[0][1]).toEqual({
      event: "user-selected-product",
      payload: {
        product: { data: wrapper.vm.localProducts[0], type: "product" },
        product_variant: {
          data: wrapper.vm.localProducts[0].variants[0],
          type: "product_variant",
        },
      },
    });
  });
});
