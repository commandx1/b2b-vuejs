import Vue from "vue";

const state = {
  siteData: {},
  website: "",
};

const getters = {
  getsiteData(state) {
    return state.siteData;
  },
  getwebsite(state) {
    return state.website;
  },
};
const mutations = {
  updateInitSiteData(state, product) {
    state.siteData = product;
  },
  updateWebsite(state, site) {
    state.website = site;
  },
};
const actions = {
  initApp({ commit }, payload) {
    Vue.http.get(payload.url).then((response) => {
      console.log(response.body);

      const data = response.data;

      commit("updateInitSiteData", data);
    });
  },
  initWebsite({ commit }, payload) {
    commit("updateWebsite", payload.site);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
