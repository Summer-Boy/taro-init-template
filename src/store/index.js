import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
  openId: '',
  number: 1
};

const mutations = {
  ADD_NUMBER(state, payload) {
    state.number = payload;
  },
  SET_OPENID(state, payload) {
    state.openId = payload;
  }
};

const actions = {
  addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
  },
  setOpenId(context, id) {
    context.commit("SET_OPENID", id);
  }
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => {}
      }
    })
  ]
});
