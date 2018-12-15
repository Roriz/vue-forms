/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visibleMenu: true,
  },
  mutations: {
    SET_MENU(state, visible) {
      state.visibleMenu = visible;
    },
  },
});
