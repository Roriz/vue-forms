import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

global.console.warn = jest.fn();
global.console.error = jest.fn();

export default {
  getViewModel(component, options = {}) {
    let store;
    if (options.store) {
      store = new Vuex.Store(options.store);
    }
    return shallowMount(component, {
      ...options,
      store,
      localVue,
    });
  },
};
