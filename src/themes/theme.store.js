/* eslint no-param-reassign:0 */

import Vue from 'vue';
import {
  DefaultTheme,
  DarkTheme
} from '@/themes';

export default {
  namespaced: true,
  state: {
    darkTheme: false,
  },
  getters: {},
  mutations: {
    initializeStore(state) {
      // check if 'darkTheme' exists
      if (localStorage.getItem('darkTheme')) {
        let localStorageDarkTheme;
        try {
          localStorageDarkTheme = JSON.parse(localStorage.getItem('darkTheme'));
        } catch (error) {
          localStorageDarkTheme = false;
        }
        state.darkTheme = localStorageDarkTheme;

        if (state.darkTheme) {
          Vue.prototype.$vuetify.theme = DarkTheme;
        } else {
          Vue.prototype.$vuetify.theme = DefaultTheme;
        }
      }
    },
    toggleDarkTheme(state) {
      state.darkTheme = !state.darkTheme;
      if (state.darkTheme) {
        Vue.prototype.$vuetify.theme = DarkTheme;
      } else {
        Vue.prototype.$vuetify.theme = DefaultTheme;
      }
    },
  },
};