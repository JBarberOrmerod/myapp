import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Customer from "../views/CustomerView.vue";
import Product from "../views/ProductView.vue"
//import vue from 

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer,
  },
  {
    path: "/order",
    name: "Order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OrderView.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  
];

/*const app = new Vue({
  el: '#app',
 
  data () {
      result: "",
      responseAvailable: false,
      apiKey: '<YOUR_RAPIDAPI_KEY>'
  },
  methods: {
      fetchAPIData( ) { 
      }
  }
});*/


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
