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
    EDIT(state, { id, form }) {
      state.list = state.list.map((f => (f.id === id ? { ...f, ...form } : f)));
    },
    DESTROY(state, id) {
      state.list = state.list.filter(f => f.id !== id);
    },
  },

  actions: {
    persistForm({ state, commit }, form) {
      const persistedForm = {
        id: state.list.length + 1,
        ...form,
      };
      commit('ADD', persistedForm);
      return persistedForm;
    },

    async fetchBy({ dispatch }, payload = {}) {
      const response = await CargoAPI.forms.list(payload);

      const forms = await Promise.all(response.map(f => dispatch('persistForm', f)));
      return forms;
    },

    async fetchOne({ dispatch }, id) {
      const response = await CargoAPI.forms.get(id);

      const form = await dispatch('persistForm', response);

      return form;
    },

    async create({ dispatch }, payload) {
      const response = await CargoAPI.forms.create(payload);

      const form = await dispatch('persistForm', response);

      return form;
    },

    async edit({ commit }, payload) {
      const response = await CargoAPI.forms.update(payload.id, payload);

      const form = commit('EDIT', { id: payload.id, response });

      return form;
    },

    async destroy({ commit }, id) {
      await CargoAPI.forms.destroy(id);

      commit('DESTROY', id);
    },
  },
};
