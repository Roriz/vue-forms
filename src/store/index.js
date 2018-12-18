/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';
import forms from './modules/forms';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    forms,
  },

  state: {
    visibleMenu: true,
  },
  mutations: {
    SET_MENU(state, visible) {
      state.visibleMenu = Boolean(visible);
    },
  },
});
