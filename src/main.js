// seting import =======================================
import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import VueResource from "vue-resource";

// pages import ========================================
import Home from "./pages/Home.vue";
import men from "./pages/men.vue";
import Checkout from "./pages/Checkout.vue";

// components import ===================================
import MainLayout from "./components/MainLayout.vue";
import header from "./components/header.vue";
import information from "./components/information.vue";
import footer from "./components/footer.vue";
import Items from "./components/Items.vue";
import itemsMen from "./components/itemsMen.vue";
import cart from "./components/cart.vue";

//Подключаем прикладные инструменты и компоненты=======
Vue.use(router);
Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000/";
Vue.component("app-men", men);
Vue.component("app-checkout", Checkout);
Vue.component("app-mainLayout", MainLayout);
Vue.component("app-header", header);
Vue.component("app-footer", footer);
Vue.component("app-items", Items);
Vue.component("app-information", information);
Vue.component("app-itemsMen", itemsMen);
Vue.component("app-cart", cart);
Vue.component("app-home", Home);

//Генерируем приложение=================================
new Vue({
  el: "#app",
  render: h => h(App),
  router: router,

  methods: {
    getJson(url) {
      return fetch(url).then(result => result.json());
      // .catch(error => {
      //     this.$refs.error.setError(error);
      // })
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json());
      // .catch(error => {
      //     this.$refs.error.setError(error);
      // });
    },
    putJson(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(result => result.json());
      // .catch(error => {
      //     this.$refs.error.setError(error);
      // });
    },
    deleteJson(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(result => result.json());
      // .catch(error => {
      //     this.$refs.error.setError(error);
      // });
    }
  }
});
