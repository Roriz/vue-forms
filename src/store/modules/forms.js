/* eslint-disable no-param-reassign */
import CargoAPI from '@/plugins/cargox-api';

export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    ADD(state, form) {
      state.list.push(form);
    },
  },

  actions: {
    async fetchBy({ commit }, payload = {}) {
      const response = await CargoAPI.forms.list(payload);

      response.forEach(r => commit('ADD', r));
      console.log('-- response', response);
      return response;
    },
  },
};
