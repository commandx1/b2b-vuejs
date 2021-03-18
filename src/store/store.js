import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/products";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    product,
  },
});
