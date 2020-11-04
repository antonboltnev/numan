import "@vue/test-utils";
import { testFactory } from "@/utilites/factory";
import Confirmation from "@/components/Confirmation";

describe("Confirmation.vue", () => {
  const factory = () => {
    const state = {
      totalPathData: {
        category: {
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
        selectedProduct: {
          data: {
            id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
            type: "product",
            attributes: {
              name: "Tadalafil",
              slug: "tadalafil",
              alt_name: "Generic Cialis",
              category_id: "b147724b-7090-43d1-86e1-6ac334a1142c",
              default_product_variant_id:
                "1f38cf6f-7c76-4fb0-8399-b464d63debe9",
              prescription_required: true,
              questionnaire_required: true,
              medicine: true,
              description:
                "Tadalafil contains the same active ingredient as Cialis, but comes at a lower price since you aren't paying for the brand name. It works in the same way as Viagra, but the effects last for 36 hours rather than four.  ",
              long_description: "",
              summary:
                "Tadalafil contains the same active ingredient as Cialis, but comes at a lower price since you aren't paying for the brand name. It works in the same way as Viagra, but the effects last for 36 hours rather than four.  ",
              availability:
                "Available in packs of 8/16 tablets and 10mg dosage.",
              dosage: "",
              risks: "",
              side_effects: "",
              usage: "",
              active: true,
              position: 3,
            },
            relationships: {
              default_product_variant: {
                data: {
                  id: "1f38cf6f-7c76-4fb0-8399-b464d63debe9",
                  type: "product_variant",
                },
              },
              product_variants: {
                data: [
                  {
                    id: "039e52b9-46bd-458a-9783-c12b5c019c5f",
                    type: "product_variant",
                  },
                  {
                    id: "9197c2cc-e81e-4245-bc30-04e692b93681",
                    type: "product_variant",
                  },
                  {
                    id: "83c9eb4a-7e3d-4d6d-9ef8-198521e75d07",
                    type: "product_variant",
                  },
                  {
                    id: "1f38cf6f-7c76-4fb0-8399-b464d63debe9",
                    type: "product_variant",
                  },
                  {
                    id: "1404329a-9fc6-43fa-b4e0-8ab63b73b467",
                    type: "product_variant",
                  },
                  {
                    id: "73e3d26c-31db-4b17-8396-a58578544c7f",
                    type: "product_variant",
                  },
                  {
                    id: "caf45b3b-88b1-465e-9245-7a56b2d2f4c9",
                    type: "product_variant",
                  },
                  {
                    id: "9b8b4743-d966-4375-9363-bece658b0239",
                    type: "product_variant",
                  },
                  {
                    id: "3c18a803-b8a3-4097-b391-a48954e65ea4",
                    type: "product_variant",
                  },
                  {
                    id: "def946ef-aabc-4d9d-a4a1-4f2bd74b1b4e",
                    type: "product_variant",
                  },
                  {
                    id: "e9dd3ca1-e27e-4c75-9335-17ac9d1ea2e2",
                    type: "product_variant",
                  },
                  {
                    id: "21e6642c-0026-4d86-a5ec-149eff13b3b2",
                    type: "product_variant",
                  },
                  {
                    id: "448e7d18-526a-4097-823c-4a6cd6a4efa1",
                    type: "product_variant",
                  },
                  {
                    id: "e22c1234-6c7a-46f2-a96b-3b948bc1b7b3",
                    type: "product_variant",
                  },
                  {
                    id: "5372bd85-35f5-4c9e-9d81-338559a51c51",
                    type: "product_variant",
                  },
                  {
                    id: "766ecdb5-6d71-497c-a7c8-510419985a3b",
                    type: "product_variant",
                  },
                ],
              },
            },
            links: { self: "/v1/products/tadalafil" },
            variants: [
              {
                default: true,
                id: "766ecdb5-6d71-497c-a7c8-510419985a3b",
                type: "product_variant",
                attributes: {
                  variant: "20mg 32 tablets",
                  price: 12600,
                  quantity: 32,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 6,
                  subscription_frequency: "2m",
                  active: true,
                  position: 16,
                  average_monthly_quantity: 16,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 393,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "9b8b4743-d966-4375-9363-bece658b0239",
                type: "product_variant",
                attributes: {
                  variant: "10mg 32 tablets",
                  price: 9000,
                  quantity: 32,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 6,
                  subscription_frequency: "2m",
                  active: true,
                  position: 8,
                  average_monthly_quantity: 16,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 281,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "448e7d18-526a-4097-823c-4a6cd6a4efa1",
                type: "product_variant",
                attributes: {
                  variant: "20mg 16 tablets",
                  price: 8100,
                  quantity: 16,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 6,
                  subscription_frequency: "2m",
                  active: true,
                  position: 13,
                  average_monthly_quantity: 8,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 506,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "5372bd85-35f5-4c9e-9d81-338559a51c51",
                type: "product_variant",
                attributes: {
                  variant: "20mg 16 tablets",
                  price: 7000,
                  quantity: 16,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 12,
                  subscription_frequency: "1m",
                  active: true,
                  position: 15,
                  average_monthly_quantity: 16,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 437,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "def946ef-aabc-4d9d-a4a1-4f2bd74b1b4e",
                type: "product_variant",
                attributes: {
                  variant: "20mg 8 tablets",
                  price: 6300,
                  quantity: 8,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 6,
                  subscription_frequency: "2m",
                  active: true,
                  position: 10,
                  average_monthly_quantity: 4,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 787,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "1404329a-9fc6-43fa-b4e0-8ab63b73b467",
                type: "product_variant",
                attributes: {
                  variant: "10mg 16 tablets",
                  price: 5800,
                  quantity: 16,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 6,
                  subscription_frequency: "2m",
                  active: true,
                  position: 5,
                  average_monthly_quantity: 8,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 362,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "e22c1234-6c7a-46f2-a96b-3b948bc1b7b3",
                type: "product_variant",
                attributes: {
                  variant: "20mg 8 tablets",
                  price: 5300,
                  quantity: 8,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 24,
                  subscription_frequency: "14d",
                  active: true,
                  position: 14,
                  average_monthly_quantity: 16,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 662,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "caf45b3b-88b1-465e-9245-7a56b2d2f4c9",
                type: "product_variant",
                attributes: {
                  variant: "10mg 16 tablets",
                  price: 5000,
                  quantity: 16,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 12,
                  subscription_frequency: "1m",
                  active: true,
                  position: 7,
                  average_monthly_quantity: 16,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 312,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "9197c2cc-e81e-4245-bc30-04e692b93681",
                type: "product_variant",
                attributes: {
                  variant: "10mg 8 tablets",
                  price: 4500,
                  quantity: 8,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 6,
                  subscription_frequency: "2m",
                  active: true,
                  position: 2,
                  average_monthly_quantity: 4,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 562,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "21e6642c-0026-4d86-a5ec-149eff13b3b2",
                type: "product_variant",
                attributes: {
                  variant: "20mg 8 tablets",
                  price: 4400,
                  quantity: 8,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 12,
                  subscription_frequency: "1m",
                  active: true,
                  position: 12,
                  average_monthly_quantity: 8,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 550,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "73e3d26c-31db-4b17-8396-a58578544c7f",
                type: "product_variant",
                attributes: {
                  variant: "10mg 8 tablets",
                  price: 3800,
                  quantity: 8,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 24,
                  subscription_frequency: "14d",
                  active: true,
                  position: 6,
                  average_monthly_quantity: 16,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 475,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "3c18a803-b8a3-4097-b391-a48954e65ea4",
                type: "product_variant",
                attributes: {
                  variant: "20mg 4 tablets",
                  price: 3500,
                  quantity: 4,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 12,
                  subscription_frequency: "1m",
                  active: true,
                  position: 9,
                  average_monthly_quantity: 4,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 875,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "e9dd3ca1-e27e-4c75-9335-17ac9d1ea2e2",
                type: "product_variant",
                attributes: {
                  variant: "20mg 4 tablets",
                  price: 3500,
                  quantity: 4,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 24,
                  subscription_frequency: "14d",
                  active: true,
                  position: 11,
                  average_monthly_quantity: 8,
                  dosage: "20mg",
                  dosage_quantity: 20,
                  dosage_unit: "mg",
                  unit_price: 875,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "1f38cf6f-7c76-4fb0-8399-b464d63debe9",
                type: "product_variant",
                attributes: {
                  variant: "10mg 8 tablets",
                  price: 3200,
                  quantity: 8,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 12,
                  subscription_frequency: "1m",
                  active: true,
                  position: 4,
                  average_monthly_quantity: 8,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 400,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "039e52b9-46bd-458a-9783-c12b5c019c5f",
                type: "product_variant",
                attributes: {
                  variant: "10mg 4 tablets",
                  price: 2500,
                  quantity: 4,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 12,
                  subscription_frequency: "1m",
                  active: true,
                  position: 1,
                  average_monthly_quantity: 4,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 625,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
              {
                default: false,
                id: "83c9eb4a-7e3d-4d6d-9ef8-198521e75d07",
                type: "product_variant",
                attributes: {
                  variant: "10mg 4 tablets",
                  price: 2500,
                  quantity: 4,
                  unit: "tablet",
                  product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  is_subscription_based: true,
                  subscription_number_of_repeats: 24,
                  subscription_frequency: "14d",
                  active: true,
                  position: 3,
                  average_monthly_quantity: 8,
                  dosage: "10mg",
                  dosage_quantity: 10,
                  dosage_unit: "mg",
                  unit_price: 625,
                },
                relationships: {
                  product: {
                    data: {
                      id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                      type: "product",
                    },
                  },
                },
              },
            ],
            default: true,
          },
          type: "product",
        },
        productVariant: {
          data: {
            default: true,
            id: "766ecdb5-6d71-497c-a7c8-510419985a3b",
            type: "product_variant",
            attributes: {
              variant: "20mg 32 tablets",
              price: 12600,
              quantity: 32,
              unit: "tablet",
              product_id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
              is_subscription_based: true,
              subscription_number_of_repeats: 6,
              subscription_frequency: "2m",
              active: true,
              position: 16,
              average_monthly_quantity: 16,
              dosage: "20mg",
              dosage_quantity: 20,
              dosage_unit: "mg",
              unit_price: 393,
            },
            relationships: {
              product: {
                data: {
                  id: "1c4c4ba7-6206-4835-832a-aeb4797b4fdb",
                  type: "product",
                },
              },
            },
          },
          type: "product_variant",
        },
        userData: {
          type: "user_data",
          data: {
            attributes: {
              firstName: "asd",
              lastName: "asd",
              phone: "124124124",
              email: "asd@asd.ru",
            },
          },
        },
      },
    };
    const actions = {
      setFlowEvent: jest.fn((context, params) => {
        return { context, params };
      }),
    };
    let wrapper = testFactory(Confirmation, {
      store: {
        state: state,
        actions: actions,
      },
    }).wrapper;

    return {
      wrapper: wrapper,
      state: state,
      actions: actions,
    };
  };

  it("Check the mapState data", function () {
    let { wrapper, state } = factory();
    expect(wrapper.vm.totalPathData).toEqual(state.totalPathData);
  });

  it("toTYPage()", function () {
    let { wrapper, actions } = factory();
    wrapper.vm.toTYPage();


    expect(actions.setFlowEvent.mock.results[0].value.params).toEqual({
      event: "user-submitted-order",
      payload: {
        type: "user-submitted-order",
        data: {
          attributes: wrapper.vm.totalPathData,
        },
      },
    });
  });

});
