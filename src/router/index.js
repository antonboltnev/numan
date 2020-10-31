import Vue from "vue";
import VueRouter from "vue-router";


//layouts
import MainLayout from "@/layouts/MainLayout";


//components
const Home = () => import("@/components/Home");
const Categories = () => import("@/components/Categories");
const ProductList = () => import("@/components/ProductList");
const ContactForm = () => import("@/components/ContactForm");
const Confirmation = () => import("@/components/Confirmation");
const ThankYouPage = () => import("@/components/ThankYouPage");

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/categories",
        name: "Categories",
        component: Categories,
      },
      {
        path: "/product-list",
        name: "ProductList",
        component: ProductList
      },
      {
        path: "/contact-form",
        name: "ContactForm",
        component: ContactForm
      },
      {
        path: "/confirmation",
        name: "Confirmation",
        component: Confirmation
      },
      {
        path: "/ty-page",
        name: "ThankYouPage",
        component: ThankYouPage
      }
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
