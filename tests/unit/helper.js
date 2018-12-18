import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';

Vue.use(Vuetify);

export default {
  getViewModel(component, options) {
    return shallowMount(component, options);
  },
};
